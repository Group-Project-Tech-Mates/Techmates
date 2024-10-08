
import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import NavBar from './Components/NavBar';
import Feed from './Components/Feed';
import CreatePost from './Components/CreatePost';
const postRoutes = require('./routes/Posts'); // Correct relative path to the routes file
app.use(express.json()); // Middleware to parse JSON bodies
app.use(postRoutes); // Use the post routes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="main-content">
            {/* Route for the Home page */}
            <Route path="/" exact component={Home} />
            {/* Route for the Sign Up page */}
            <Route path="/signup" component={SignUp} />
            {/* Route for the Sign In page */}
            <Route path="/signin" component={SignIn} />
          </div>
          <div className="right-sidebar">
            <h3>Search</h3>
            <input type="text" placeholder="Search..." className="search-input" />
        
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;