import React from 'react';
import axios from 'axios';
import Notification from '../components/Notification/notification';

export default function enhancerAxios (url, options = { method: 'get' }, data = {}) {
  axios.defaults.headers = axios.defaults.headers || {};
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const token = window.localStorage.getItem('auth-token');
  if (!axios.defaults.headers.common.Authorization) {
    axios.defaults.headers.common.Authorization = token ?? '';
  }

  return (axios({
    method: `${options.method}`,
    url: `${url}`,
    data
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return null;
      console.log(err);
    })
  )
}