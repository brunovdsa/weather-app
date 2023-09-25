import './App.scss';
import { LocationIcon } from './components/Icons/icons';

function App() {
  return (
    <div className='container'>
      <main className='box'>
        <section>
          <div className='header'>
            <h1 className='location'>
              <span>
                <LocationIcon className='location-icon' />
              </span>
              Joinville, SC
            </h1>
            <p>Segunda, 25 de setembro 16:56 </p>
          </div>
          <div className='content'>
            <p className='temperature'>20ºC</p>
            <img
              src='https://openweathermap.org/img/wn/10d@2x.png'
              alt='Weather icon.'
              className='weather-icon'
            />
          </div>
        </section>
        <p>Drizzle</p>
        <p>Feels like 21</p>
        <p>temperatura minima</p>
        <p>temperatura max</p>
        <p>humidade</p>
        <p className='weather-temp'></p>
      </main>
    </div>
  );
}

export default App;
