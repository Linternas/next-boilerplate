import axios from 'axios';
import { getCookie } from 'src/utils/cookie';
import { parse, stringify } from 'qs';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PATH,
  timeout: 60000,
  withCredentials: false,
  headers: { Accept: 'application/json' },
  paramsSerializer: {
    serialize: (params) => {
      return stringify(params, { arrayFormat: 'repeat' });
    }
  }
});

API.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = `Bearer ${getCookie('jwt')}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default API;
