import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://pyi1egz3ki.execute-api.us-east-1.amazonaws.com/default', 
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;
