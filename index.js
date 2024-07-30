import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './Signup';
import SignIn from './Sign_In';
import Navbar from './Nav_bar';
import Home from './Home'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <SignUp/>
    <SignIn/>
  </React.StrictMode>
);

reportWebVitals();
