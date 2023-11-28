import { useEffect, useState } from 'react';
import './App.scss';
import { Card } from './components/Card/Card';
import { SearchBar } from './components/SearchBar/SearchBar';
import axios from 'axios';
import { API_KEY, BASE_URL } from './service/api-config';
import { CardDataProps } from './interfaces/interfaces';

function App() {
  const [weatherData, setWeatherData] = useState<CardDataProps>();
  const [currentTimestamp, setCurrentTimestamp] = useState<number>();

  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  const [searchResult, setSearchResult] = useState<CardDataProps>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentTimestamp(position.timestamp);
      const ENDPOINT: string = `/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=`;
      axios.get(`${BASE_URL}${ENDPOINT}${API_KEY}`).then((res) => {
        setWeatherData(res.data);
      });
    });
  }, []);

  const handleCallback = (childData: string) => {
    setSearchKeyWord(childData);
    console.log(searchKeyWord);

    const ENDPOINT: string = `/weather?q=${searchKeyWord}&units=metric&appid=`;

    axios.get(`${BASE_URL}${ENDPOINT}${API_KEY}`).then((res) => {
      setSearchResult(res.data);
    });
  };

  console.log('renderizado');

  return (
    <div className='container'>
      <SearchBar handleCallback={handleCallback} />

      {searchResult === undefined ? (
        <Card
          weatherData={weatherData}
          timestamp={currentTimestamp}
          timezone={0}
        />
      ) : (
        <Card
          weatherData={searchResult}
          timestamp={searchResult.dt}
          timezone={searchResult.timezone}
        />
      )}
    </div>
  );
}

export default App;
