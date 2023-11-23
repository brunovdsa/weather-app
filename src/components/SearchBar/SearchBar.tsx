import axios from 'axios';
import { API_KEY, BASE_URL } from '../../service/api-config';
import { CardDataProps } from '../../interfaces/interfaces';
import { getSearchResultCurrentDate } from '../utils/getSearchResultCurrentDate';

interface SearchBarProps {
  setSearchWord: any;
  searchWord: string;
  searchResult: (s: CardDataProps) => void;
}

export function SearchBar(props: SearchBarProps) {
  const searchLocation = async (e: any) => {
    e.preventDefault();

    const ENDPOINT: string = `/weather?q=${props.searchWord}&unit=metric&appid=`;

    axios.get(`${BASE_URL}${ENDPOINT}${API_KEY}`).then((res) => {
      props.searchResult(res.data);
    });

    getSearchResultCurrentDate();
  };

  return (
    <form>
      <input
        type='text'
        placeholder={`Search for free photos`}
        onChange={(e: any) => props.setSearchWord(e.target.value)}
      />
      <button onClick={searchLocation}>Click</button>
    </form>
  );
}
