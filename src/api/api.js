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

  deleteRequest: (url, body) => {
    return axios.delete(baseUrl + url);
  },

  // postRequest: (url, body) => {
  //   return fetch(baseUrl + url, {
  //     method: 'POST',
  //     headers: new Headers({
  //       'Content-type': 'application/json',
  //     }),
  //     body: JSON.stringify(body),
  //   });
  // },

  // getAllRequest: (url) => {
  //   return fetch(baseUrl + url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Content-type': 'application/json',
  //     }),
  //   });
  // },

  // putRequest: (url, body) => {
  //   return fetch(baseUrl + url, {
  //     method: 'PUT',
  //     headers: new Headers({
  //       'Content-type': 'application/json',
  //     }),
  //     body: JSON.stringify(body),
  //   });
  // },

  // deleteRequest: (url) => {
  //   return fetch(baseUrl + url, {
  //     method: 'DELETE',
  //     headers: new Headers({
  //       'Content-type': 'application/json',
  //     }),
  //   });
  // },
};
