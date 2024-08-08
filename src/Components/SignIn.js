import React, { useState } from 'react';
import axios from 'axios';
import './Signin.css';

function SignIn() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/api/signin', formData)
      .then(response => {
        console.log(response.data);
        if (response.data.user) {
          alert('Sign in successful');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Sign in failed');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
export default SignIn;