import axios from 'axios';
import {API_BASE_URL} from '../assets/config/urls';

export const AxiosBaseUrl = axios.create({
  baseURL: 'http://192.168.2.102:6000',
  headers: {
    'Content-Type': 'application/json',
  },
});
