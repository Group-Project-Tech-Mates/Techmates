import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import UserContext from './UserContext';


function SignUp() {
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('mongodb+srv://kiona0908:8whYtBNjmVnx2CWd@cluster1techmates.otnvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1techmates', formData)
      .then(response => {
        alert('Sign-up successful!');
        
        
        // Redirect to home page
        history.push('/');
      })
      .catch(error => {
        console.error('Sign-up error:', error);
        alert('Sign-up failed! ' + (error.response?.data?.message || error.message));
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;