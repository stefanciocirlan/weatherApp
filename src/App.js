import { useRef, useState } from 'react';
import MyMap from './MyMap.js';
import WeatherCard from './WeatherCard';

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
    console.log("APP ", pos);
    setPosition(pos);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    resetInputs();
  }

  return (
    <div className="card">
      <div className="left-side">
        <WeatherCard position={position} />
        {/* <form className='form-body'>
          <div className='form-group'>
          <label className='form-label' >City</label>
            <input id='city-input' className='form-input' ref={cityRef}></input>
          </div>
          <div className='form-group'>
            <label className='form-label'>Lat</label>
            <input className='form-input' ref={latRef}></input>
          </div>
          <div className='form-group'>
            <label className='form-label'>Long</label>
            <input className='form-input' ref={longRef}></input>
          </div>
          <button onClick={handleSubmit} className='btn'>Request</button>
        </form>
*/}</div>
      <div className="right-side">
        <MyMap handlePosition={handlePosition} />
      </div>
    </div>
  );
}

export default App;
