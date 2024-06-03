import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://pyi1egz3ki.execute-api.us-east-1.amazonaws.com/default', 
    timeout: 10000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
        // Add more headers as needed here, for example:
        'X-Requested-With': 'XMLHttpRequest', // This header can help with CORS
    }
});

// Interceptor to handle preflight
api.interceptors.request.use(request => {
    // Ensure credentials are sent with every request if needed
    request.withCredentials = true;
    return request;
});

export default api;
