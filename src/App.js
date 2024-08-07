<<<<<<< HEAD
// src/App.js
import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>TechMates</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </div>
      </div>
    </Router>
=======


import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Techmates</h1>
      </header>
    </div>
>>>>>>> 1d72fc53763495f38817be115744af57dd1efa7f
  );
}

export default App;