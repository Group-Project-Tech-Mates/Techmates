// src/App.js
import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/home" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;