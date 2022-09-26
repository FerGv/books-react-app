// Libraries
import axios from 'axios';

// Config
import config from '../config';

export const request = axios.create({
  baseURL: config.API_URL,
});
