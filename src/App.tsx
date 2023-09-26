import './App.scss';
import { LocationIcon } from './components/Icons/icons';

function App() {
  return (
    <div className='container'>
      <div className='box'>
        <main>
          <article>
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
              <p className='temperature'>20º</p>
              <div className='subheading'>
                <div className='icon-container'>
                  <p className='weather-condition'>Drizzle</p>
                  <img
                    src='https://openweathermap.org/img/wn/10d@2x.png'
                    alt='Weather icon.'
                    className='weather-icon'
                  />
                </div>
              </div>
              <div className='weather-info'>
                div.
                <p>temperatura minima</p>
                <p>temperatura max</p>
                <p>humidade</p>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default App;
