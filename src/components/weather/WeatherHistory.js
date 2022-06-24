import "../../styles/weather-history.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { kelvinToCelsius } from "../../helpers/converTemperatures";

const WeatherHistory = () => {
    const historyItems = useSelector(store => store.positionReducer);

    const renderHistoryItems = () => {
        
        return historyItems?.map(cityObject => {
            return <li key={cityObject?.id} className='weather-history-item'>
                <span className='city-name-history'>{cityObject?.name}</span>
                <span className="city-temp-history">{kelvinToCelsius(cityObject?.main.temp)} °C</span>
            </li >
        })
    }

    return <ul className='weather-history-container'>
        {renderHistoryItems()}
    </ul>
}


export default WeatherHistory;