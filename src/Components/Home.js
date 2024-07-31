import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    axios.get('/api/objects')
      .then(response => setObjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <header>
        <h1>TechMates</h1>
        <img src="./Techmates logo.png" alt="Team Logo" />
      </header>
      <ul>
        {objects.map(object => (
          <li key={object.id}>{object.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
