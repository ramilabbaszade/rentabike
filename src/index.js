import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './shared/context/auth-context';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

ReactDOM.render(<AuthContextProvider><App /></AuthContextProvider>,document.getElementById('root'));

