import { useEffect, useState } from 'react';
import { kelvinToCelsius, kelvinToFahrenheit } from './helpers/converTemperatures';
import { camelCaseString, getCurrentTime } from './helpers/utils';
import { SunCloud } from './icons/sun-cloud';
import fetchData from './helpers/fetchData';
import Sunny from './icons/sunny';
import Cloud from './icons/cloud';
import RainIcon from './icons/rain-icon';

const WeatherCard = (props) => {

  const [position, setPosition] = useState();
  const [weatherObject, setWeatherObject] = useState();
  const [showFahrenehit, setShowFahrenheit] = useState(false);
  const [currTime, setCurrTime] = useState();

  useEffect(() => {
    const { position: foundPos } = props;
    setPosition(foundPos);
  }, [props.position])


  useEffect(() => {
    setInterval(() => {
      const time = getCurrentTime();
      setCurrTime(time);
    }, 1000)

  }, []);



  useEffect(() => {
    const weatherDetails = fetchData(position);
    weatherDetails.then(result => setWeatherObject(result));

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
    {!currTime ? <Loader /> :
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
              <p className='hour letter-spacing'>Today {currTime}</p>
              <p className='weather-description letter-spacing'>{camelCaseString(weatherObject?.weather[0].description)}</p>
              <p className='wind letter-spacing'>Pressure: {weatherObject?.main.pressure} hPa</p>
              <p className='humidity letter-spacing'>Humidity: {weatherObject?.main.humidity}% </p>
            </div>
          </div>

        </section></>}
  </div>

}

export default WeatherCard;