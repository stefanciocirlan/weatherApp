import React, { useEffect, useRef, useState } from 'react';
import MyMap from './components/map/MyMap';
import WeatherCard from './components/weather/WeatherCard';
import ErrorBoundary from './ErrorBoundary.js';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound.js';
import MapIcon from './icons/map-icon';
import ArrowUp from './icons/arrow-up';


function App() {

  const mapRef = React.createRef();
  const arrowRef = React.createRef();
  const weatherCardRef = React.createRef();
  const [position, setPosition] = useState({});

  const handlePosition = (pos) => {
    setPosition(pos);
  }

  const scrollToTheMap = () => {
    mapRef.current.scrollIntoView();
  }

  const scrollToTheWeatherCard = () => {
    weatherCardRef.current.scrollIntoView();
  }

 
  return (

    <div className="container">
      <div ref={weatherCardRef} className="left-side">
        <div onClick={scrollToTheMap} className="map-icon"><MapIcon /></div>
        <ErrorBoundary>
          <Routes>
            <Route exact path='/' element={<WeatherCard position={position} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
      <div className="right-side">
        <MyMap ref={mapRef} handlePosition={handlePosition} />
        <a ref={arrowRef} onClick={scrollToTheWeatherCard} className="arrow-up-icon"><ArrowUp /></a>
      </div>
    </div>
  );
}

export default App;
