import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../service/api-config';

import { LocationIcon, DropletIcon, TempIcon, WindIcon } from '../Icons/icons';
import './Card.scss';
import { getCurrentDate } from '../utils/getCurrentDate';
import { captalizeFirsLetter } from '../utils/captalizeFirstLetter';

interface CardProps {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
    }
  ];

  wind: {
    speed: number;
  };
}

export function Card() {
  const [weatherData, setWeatherData] = useState<CardProps>();

  const ENDPOINT: string =
    '/weather?lat=-26.3051&lon=-48.8461&units=metric&appid=';

  useEffect(() => {
    axios.get(`${BASE_URL}${ENDPOINT}${API_KEY}`).then((res) => {
      console.log(res);
      setWeatherData(res.data);
    });
  }, []);

  console.log(weatherData);

  return (
    <main className='card-container'>
      {weatherData === undefined ? (
        <>loading...</>
      ) : (
        <article className='box'>
          <section>
            <div className='header'>
              <h1 className='location'>
                <span>
                  <LocationIcon className='location-icon' />
                </span>
                {weatherData.name}
              </h1>
              <p>{getCurrentDate()}</p>
            </div>
            <div className='content'>
              <p className='temperature'>{`${Math.floor(
                weatherData.main.temp
              )}º`}</p>
              <div className='subheading'>
                <div className='icon-container'>
                  <p className='weather-condition'>
                    {captalizeFirsLetter(weatherData.weather[0].description)}
                  </p>
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
                    <span className='item-value'>{`${weatherData.main.humidity}%`}</span>
                    <p className='item-label'>Humidity</p>
                  </li>
                  <li className='item-list'>
                    <TempIcon className='item-icon' />
                    <span className='item-value'>{`${Math.floor(
                      weatherData.main.temp_max
                    )}º`}</span>
                    <p className='item-label'>Temp. Máx</p>
                  </li>
                  <li className='item-list'>
                    <WindIcon className='item-icon' />
                    <span className='item-value'>{`${Math.floor(
                      weatherData.wind.speed
                    )} km/h`}</span>
                    <p className='item-label'>Wind Speed</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      )}
    </main>
  );
}
