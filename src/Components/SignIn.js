import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Signin.css';
import UserContext from './UserContext';

function SignIn() {
  const { setUser } = useContext(UserContext);

  const handleSignIn = async () => {
    try {
      const response = await axios.post('mongodb+srv://kiona0908:8whYtBNjmVnx2CWd@cluster1techmates.otnvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1techmates', {
        username: 'user',
        password: 'password',
      });
      // Save user data to context
      setUser(response.data.user);
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('mongodb+srv://kiona0908:8whYtBNjmVnx2CWd@cluster1techmates.otnvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1techmates', formData)
      .then(response => {
        console.log('Sign-in response:', response.data); // Debugging log
        if (response.data.user) {
          // Save user data to local storage or context
          localStorage.setItem('user', JSON.stringify(response.data.user));

          // Alert success and redirect to the home page
          alert('Sign in successful');
          history.push('/'); // Redirect to the homepage
        } else {
          alert('Sign in failed');
        }
      })
      .catch(error => {
        console.error('Sign-in error:', error);
        alert('Sign in failed');
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
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; 
// import axios from 'axios';
// import './Signin.css';

// function SignIn() {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const history = useHistory(); // Initialize history

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5001/api/signin', formData)
//       .then(response => {
//         console.log('Sign-in response:', response.data); // Debugging log
//         if (response.data.user) {
//           alert('Sign in successful');
//           console.log('Redirecting to home...'); // Debugging log
//           history.push('/home'); // Use history.push to redirect to the home page
//         } else {
//           console.log('User data not found, not redirecting.'); // Debugging log
//           alert('Sign in failed');
//         }
//       })
//       .catch(error => {
//         console.error('Sign-in error:', error);
//         alert('Sign in failed');
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
//       <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
//       <button type="submit">Sign In</button>
//     </form>
//   );
// }

// export default SignIn;