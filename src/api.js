import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://pyi1egz3ki.execute-api.us-east-1.amazonaws.com/default', // Set your base URL here
    timeout: 10000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;