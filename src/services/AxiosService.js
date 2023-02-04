import axios from 'axios';

const BASEURL = `https://94c6-125-20-216-178.in.ngrok.io/`;

const token = '';

export const serviceHandler = {
  get: async (url, headers = null) => {
    try {
      return await axios.get(`${BASEURL}${url}`, setHeaders(headers));
    } catch (err) {
      if (err) {
        return err;
      }
    }
  },
  getAuth: async (url, headers = null) => {
    try {
      return await axios.get(`${BASEURL}${url}`, setAuthHeaders(headers));
    } catch (err) {
      if (err) {
        return err;
      }
    }
  },
  post: async (url, data, headers = null) => {
    try {
      return await axios.post(`${BASEURL}${url}`, data, setHeaders(headers));
    } catch (err) {
      if (err) {
        return err;
      }
    }
  },
  postAuth: async (url, data, headers = null) => {
    try {
      return await axios.post(
        `${BASEURL}${url}`,
        data,
        setAuthHeaders(headers)
      );
    } catch (err) {
      if (err) {
        return err;
      }
    }
  },
};
const setHeaders = (headers) => {
  return {
    ...headers,
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
};
const setAuthHeaders = (headers) => {
  return {
    ...headers,
    'Content-type': 'application/json',
    authorization: `Bearer ${token}`,
  };
};
