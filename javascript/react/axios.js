/*

1. Save this file in /api/your-name.js

*/

import axios from 'axios';

// const ACCESS_KEY = '82988bd8c80f6db6b73a224f2fd837401b0686e4d073e2ee18aca26d648d5089';

export default axios.create({
  baseURL: 'http://localhost:8888/my-api-path/',
  // headers: {
  //   Authorization: `Client-ID ${ACCESS_KEY}`
  // }
});




/*

2. Use as follows

*/

import yourName from '../api/your-name';

export const getPages = async () => {
  const res = await yourName.get('my-endpoint');
  const pages = res.data;
  return pages;
}