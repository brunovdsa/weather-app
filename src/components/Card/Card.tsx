import { LocationIcon, UmbrellaIcon, TempIcon, WindIcon } from '../Icons/Icons';
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
                  <UmbrellaIcon className='item-icon' />
                  <span>Humidity</span>
                </li>
                <li className='item-list'>
                  <TempIcon className='item-icon' />
                  <span>39º</span>
                </li>
                <li className='item-list'>
                  <WindIcon className='item-icon' />
                  <span>25KM/h</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
