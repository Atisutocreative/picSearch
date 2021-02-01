import axios from 'axios';

require('dotenv').config()

const API_KEY = `${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
// console.log(`${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);
// console.log(API_KEY);
// console.log(process.env);

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: API_KEY
    }
});