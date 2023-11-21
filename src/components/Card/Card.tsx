import { useEffect, useState } from 'react';
import axios from 'axios';

import { API_KEY, BASE_URL } from '../../service/api-config';

import { getCurrentDate } from '../utils/getCurrentDate';
import { captalizeFirsLetter } from '../utils/captalizeFirstLetter';
import { getWeatherIcon } from '../utils/setWeatherIcon';

import { LocationIcon, DropletIcon, TempIcon, WindIcon } from '../Icons/icons';

import './Card.scss';

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
      icon: string;
    }
  ];

  wind: {
    speed: number;
  };
}

export function Card() {
  const [weatherData, setWeatherData] = useState<CardProps>();
  const [timestamp, setTimestamp] = useState<number>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setTimestamp(position.timestamp);

      console.log(position);

      const ENDPOINT: string = `/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=`;

      axios.get(`${BASE_URL}${ENDPOINT}${API_KEY}`).then((res) => {
        setWeatherData(res.data);
      });
    });
  }, []);

  console.log(getCurrentDate(timestamp!));

  return (
    <main className='card-container'>
      <article className='box'>
        {weatherData === undefined ? (
          <>loading...</>
        ) : (
          <section>
            <div className='header'>
              <h1 className='location'>
                <span>
                  <LocationIcon className='location-icon' />
                </span>
                {weatherData.name}
              </h1>
              {timestamp && getCurrentDate(timestamp)}
            </div>
            <div className='content'>
              <div className='weather'>
                <img
                  src={getWeatherIcon(weatherData.weather[0].icon)}
                  alt='Weather icon.'
                  className='weather-icon'
                />
                <div className='weather-status'>
                  <p className='temperature'>{`${Math.floor(
                    weatherData.main.temp
                  )}º`}</p>
                  <p className='weather-condition'>
                    {captalizeFirsLetter(weatherData.weather[0].description)}
                  </p>
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
        )}
      </article>
    </main>
  );
}
