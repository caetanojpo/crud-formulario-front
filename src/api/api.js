import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const Api = {
  postRequest: (url, body) => {
    return axios.post(baseUrl + url, body);
  },

  getRequest: (url) => {
    return axios.get(baseUrl + url);
  },

  putRequest: (url, body) => {
    return axios.put(baseUrl + url, body);
  },

  deleteRequest: (url) => {
    return axios.delete(baseUrl + url);
  },
};
