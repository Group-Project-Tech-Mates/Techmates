// import React, { useState, useEffect } from 'react';
// import axios from 'axios';



// function Home() {
//   const [objects, setObjects] = useState([]);

//   useEffect(() => {
//     axios.get('/api/objects')
//       .then(response => setObjects(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <header>
        
        
//         <h1>TechMates</h1>
//       </header>
//       <ul>
//         {objects.map(object => (
//           <li key={object.id}>{object.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;


// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to TechMates</h1>
        <p>Your go-to platform for tech project collaboration.</p>
      </header>
      <nav>
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;