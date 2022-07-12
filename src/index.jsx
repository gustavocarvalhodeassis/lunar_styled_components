import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/NavBar/NavBar';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Router />
  </React.StrictMode>
);
