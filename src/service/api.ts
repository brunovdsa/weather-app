import axios from 'axios';

import { API_KEY, BASE_URL } from './api-config';

export function GetData(ENDPOINT: string) {
  axios.get(`${BASE_URL}${ENDPOINT}${API_KEY}`).then((response) => {
    console.log(response);
  });
}
