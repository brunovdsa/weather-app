import { getCurrentDate } from '../utils/getCurrentDate';
import { captalizeFirsLetter } from '../utils/captalizeFirstLetter';
import { setWeatherIcon } from '../utils/setWeatherIcon';

import { LocationIcon, DropletIcon, TempIcon, WindIcon } from '../Icons/icons';

import './Card.scss';
import { CardProps } from '../../interfaces/interfaces';

export function Card(props: CardProps) {
  return (
    <main className='card-container'>
      <article className='box'>
        {props.weatherData === undefined ? (
          <>loading...</>
        ) : (
          <section>
            <div className='header'>
              <h1 className='location'>
                <span>
                  <LocationIcon className='location-icon' />
                </span>
                {props.weatherData.name}
              </h1>
              {props.timestamp && getCurrentDate(props.timestamp)}
            </div>
            <div className='content'>
              <div className='weather'>
                <img
                  src={setWeatherIcon(props.weatherData.weather[0].icon)}
                  alt='Weather icon.'
                  className='weather-icon'
                />
                <div className='weather-status'>
                  <p className='temperature'>{`${Math.floor(
                    props.weatherData.main.temp
                  )}º`}</p>
                  <p className='weather-condition'>
                    {captalizeFirsLetter(
                      props.weatherData.weather[0].description
                    )}
                  </p>
                </div>
              </div>
              <div className='weather-info'>
                <ul className='list'>
                  <li className='item-list'>
                    <DropletIcon className='item-icon' />
                    <span className='item-value'>{`${props.weatherData.main.humidity}%`}</span>
                    <p className='item-label'>Humidity</p>
                  </li>
                  <li className='item-list'>
                    <TempIcon className='item-icon' />
                    <span className='item-value'>{`${Math.floor(
                      props.weatherData.main.temp_max
                    )}º`}</span>
                    <p className='item-label'>Temp. Máx</p>
                  </li>
                  <li className='item-list'>
                    <WindIcon className='item-icon' />
                    <span className='item-value'>{`${Math.floor(
                      props.weatherData.wind.speed
                    )} km/h`}</span>
                    <p className='item-label'>Wind Speed</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
