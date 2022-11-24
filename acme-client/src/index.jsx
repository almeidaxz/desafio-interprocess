import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import RegisterUser from './pages/RegisterUser';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    <RegisterUser />
  </React.StrictMode>
)
