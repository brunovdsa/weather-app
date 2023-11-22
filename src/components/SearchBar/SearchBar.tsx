import axios from 'axios';
import { API_KEY, BASE_URL } from '../../service/api-config';
import { useState } from 'react';

export function SearchBar() {
  const [searchLoc, setSearchLoc] = useState<string>('');

  const searchLocation = async (e: any) => {
    e.preventDefault();

    const ENDPOINT: string = `/weather?q=${searchLoc}&unit=metric&appid=`;

    axios.get(`${BASE_URL}${ENDPOINT}${API_KEY}`).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <form>
      <input
        type='text'
        placeholder={`Search for free photos`}
        onChange={(e: any) => setSearchLoc(e.target.value)}
      />
      <button onClick={searchLocation}>Click</button>
    </form>
  );
}
