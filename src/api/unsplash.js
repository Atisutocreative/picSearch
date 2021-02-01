import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID UmBUTENy_-knJN2pyTwE8PQF-zJNiK2oGFdz9rLfNPQ',
    }
});