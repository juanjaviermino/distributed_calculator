import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://your-api-url.com', // Set your base URL here
    timeout: 10000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;
