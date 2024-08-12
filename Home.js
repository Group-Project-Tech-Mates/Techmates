import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  // Define the API URL using the environment variable or fallback to a default URL
  const apiUrl = process.env.REACT_APP_API_URL || 'https://default-api-url.com';

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      console.log('Fetching posts from:', `${apiUrl}/api/posts`);
      const response = await axios.get(`${apiUrl}/api/posts`);
      console.log('Posts fetched:', response.data);
      setPosts(response.data);
    } catch (error) {
      console.error('having trouble getting posts for feed')
      , error };

    }
}

export default Home;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Home.css';
// // Comment out or remove the imports for Feed and CreatePost
// // import Feed from './Feed';
// // import CreatePost from './CreatePost';

// function Home() {
//   const [posts, setPosts] = useState([]);

//   // Define the API URL using the environment variable or fallback to the production URL
//   const apiUrl = process.env.REACT_APP_API_URL || 'https://your-production-api.com';

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       console.log('Fetching posts from:', `${apiUrl}/api/posts`);
//       const response = await axios.get(`${apiUrl}/api/posts`);
//       console.log('Posts fetched:', response.data);
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handlePostCreated = (newPost) => {
//     setPosts([newPost, ...posts]);
//   };

//   return (
//     <div className="home-container">
//       <h1>Testing Home Page</h1>
//       <p>This is a test to see if the homepage is rendering.</p>
//     </div>
//   );
// }

// export default Home;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Home.css';
// import Feed from './Feed';
// import CreatePost from './CreatePost';

// function Home() {
//   const [posts, setPosts] = useState([]);

//   // Define the API URL using the environment variable or fallback to the production URL
//   const apiUrl = process.env.REACT_APP_API_URL || 'https://your-production-api.com';

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       console.log('Fetching posts from:', `${apiUrl}/api/posts`);
//       const response = await axios.get(`${apiUrl}/api/posts`);
//       console.log('Posts fetched:', response.data);
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handlePostCreated = (newPost) => {
//     setPosts([newPost, ...posts]);
//   };

//   return (
//     <div className="home-container">
//       <CreatePost onPostCreated={handlePostCreated} />
//       <div className="feed-container">
//       <Feed posts={posts} />
//             </div>
//     </div>
//   );
// }

// export default Home;