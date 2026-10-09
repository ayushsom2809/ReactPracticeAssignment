import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './styles/main.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Parent from './components/Parent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App /> 
  </React.StrictMode>
);
