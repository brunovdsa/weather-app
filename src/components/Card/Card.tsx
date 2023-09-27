import { LocationIcon, DropletIcon, TempIcon, WindIcon } from '../Icons/icons';
import './Card.scss';

export function Card() {
  return (
    <main className='card-container'>
      <article className='box'>
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
              <ul className='list'>
                <li className='item-list'>
                  <DropletIcon className='item-icon' />
                  <span className='item-value'>100%</span>
                  <p className='item-label'>Humidity</p>
                </li>
                <li className='item-list'>
                  <TempIcon className='item-icon' />
                  <span className='item-value'>39º</span>
                  <p className='item-label'>Temp. Máx</p>
                </li>
                <li className='item-list'>
                  <WindIcon className='item-icon' />
                  <span className='item-value'>25KM/h</span>
                  <p className='item-label'>Wind Speed</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
