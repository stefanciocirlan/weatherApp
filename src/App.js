import { useRef, useState } from 'react';
import MyMap from './components/map/MyMap';
import WeatherCard from './components/weather/WeatherCard';
import ErrorBoundary from './ErrorBoundary.js';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound.js';


function App() {

  const cityRef = useRef();
  const latRef = useRef();
  const longRef = useRef();
  const [position, setPosition] = useState({});


  const resetInputs = () => {
    cityRef.current.value = '';
    latRef.current.value = '';
    longRef.current.value = '';
  }

  const handlePosition = (pos) => {

    setPosition(pos);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    resetInputs();
  }

  return (

    <div className="card">
      <div className="left-side">
        <ErrorBoundary>
          <Routes>
            <Route exact path='/' element={<WeatherCard position={position} />} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </ErrorBoundary>
      </div>
      <div className="right-side">
        <MyMap handlePosition={handlePosition} />
      </div>
    </div>
  );
}

export default App;
