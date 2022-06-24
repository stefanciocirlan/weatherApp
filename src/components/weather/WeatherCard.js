import { useEffect, useState } from 'react';
import { kelvinToCelsius, kelvinToFahrenheit } from '../../helpers/converTemperatures';
import { camelCaseString, getCurrentTime } from '../../helpers/utils';
import { SunCloud } from '../../icons/sun-cloud';
import fetchData from '../../helpers/fetchData';
import Sunny from '../../icons/sunny';
import Cloud from '../../icons/cloud';
import RainIcon from '../../icons/rain-icon';
import WeatherHistory from './WeatherHistory';
import { useDispatch } from 'react-redux/es/exports';
import { positionSliceActions } from '../../store/position-slice';
import { WeatherCurTime } from './WeatherCurTime.js';


const WeatherCard = (props) => {

  const [position, setPosition] = useState();
  const [weatherObject, setWeatherObject] = useState();
  const [showFahrenehit, setShowFahrenheit] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {

    const { position: foundPos } = props;
    setPosition(foundPos);
    dispatch(positionSliceActions.addWeatherToHistory(weatherObject));
  }, [props.position])




  useEffect(() => {
    const weatherDetails = fetchData(position);
    weatherDetails.then(response => setWeatherObject(response));

  }, [position])

  const handleShowFahrenheit = () => {
    setShowFahrenheit(!showFahrenehit);
  }

  const renderDegrees = () => {
    return <><span onClick={handleShowFahrenheit} className={`${showFahrenehit ? 'activeDegrees' : ''} fahrenheit`}>°F</span>
      <span onClick={handleShowFahrenheit} className={`${!showFahrenehit ? 'activeDegrees' : ''} celsius`}>°C</span></>
  }

  const renderIcon = (description) => {
    switch (description) {
      case 'clear sky':
        return <Sunny />;
      case 'few clouds':
        return <SunCloud />;
      case 'scattered clouds':
        return <Cloud />;
      case 'overcast clouds':
        return <Cloud />;
      case 'rain':
        return <RainIcon />;
      case 'shower rain':
        return <RainIcon />;
      default:
        return <Sunny />
    }
  }

  const Loader = () => {
    return <span className="loader"></span>
  }

  return <div className='weather-container'>
    {weatherObject == undefined ? <Loader /> :
      <><h1 className='city-name'>{weatherObject?.name},{weatherObject?.sys.country}</h1>
        <section className='details-container'>
          <div className='day-container'>
            <div className='icon'>{renderIcon(weatherObject?.weather[0].description)}</div>
            <div className='degrees'>
              {showFahrenehit ?
                kelvinToFahrenheit(weatherObject?.main?.temp)
                : kelvinToCelsius(weatherObject?.main?.temp)}
            </div>
            {renderDegrees()}
            <div className='day-details'>
              <WeatherCurTime />
              <p className='weather-description letter-spacing'>{camelCaseString(weatherObject?.weather[0].description)}</p>
              <p className='wind letter-spacing'>Pressure: {weatherObject?.main.pressure} hPa</p>
              <p className='humidity letter-spacing'>Humidity: {weatherObject?.main.humidity}% </p>
            </div>
          </div>
          <WeatherHistory />
        </section></>}
  </div>

}

export default WeatherCard;