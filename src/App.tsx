import { useEffect, useState } from 'react';
import './App.scss';
import { Card } from './components/Card/Card';
import { SearchBar } from './components/SearchBar/SearchBar';
import axios from 'axios';
import { API_KEY, BASE_URL } from './service/api-config';
import { CardDataProps } from './interfaces/interfaces';
import { getSearchResultCurrentDate } from './components/utils/getSearchResultCurrentDate';

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

  const getSearchResult = (result: CardDataProps) => {
    setSearchResult(result);
  };

  console.log(currentTimestamp);
  console.log(searchResult);
  getSearchResultCurrentDate();

  return (
    <div className='container'>
      <SearchBar
        searchWord={searchKeyWord}
        setSearchWord={setSearchKeyWord}
        searchResult={getSearchResult}
      />

      {searchResult === undefined ? (
        <Card weatherData={weatherData} timestamp={currentTimestamp} />
      ) : (
        <Card weatherData={searchResult} timestamp={currentTimestamp} />
      )}
    </div>
  );
}

export default App;
