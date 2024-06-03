import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// PrimeReact core CSS
import 'primereact/resources/primereact.min.css'; 
// PrimeIcons
import 'primeicons/primeicons.css';
// Theme specific CSS file
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';

// Import the PrimeReact context provider
import { PrimeReactProvider } from 'primereact/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
