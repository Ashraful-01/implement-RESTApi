import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Axios from '../src/axios/axios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Axios />
  </div>
);

reportWebVitals();
