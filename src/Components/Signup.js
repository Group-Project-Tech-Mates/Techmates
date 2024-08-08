import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useHistory } from 'react-router-dom'; // Import useHistory

function SignUp() {
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });
  const history = useHistory(); // Initialize useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/api/signup', formData)
      .then(response => {
        alert('Sign-up successful!');
        history.push('/'); // Redirect to home page
      })
      .catch(error => {
        alert('Sign-up failed! ' + error.response.data);
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;