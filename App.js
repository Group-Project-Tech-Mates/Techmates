import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="main-content">
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </div>
          <div className="right-sidebar">
            <h3>Search</h3>
            <input type="text" placeholder="Search..." className="search-input" />
            <div className="sidebar-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/help">Help</a>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;