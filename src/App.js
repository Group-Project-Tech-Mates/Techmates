// src/App.js
import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { UserProvider } from './Components/UserContext'; // Import UserProvider

function App() {
  return (
    <UserProvider> 
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;