import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Feed from './Feed';
import CreatePost from './CreatePost';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching posts: ' + err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="home-container">
      <CreatePost onPostCreated={handlePostCreated} />
      <Feed posts={posts} />
    </div>
  );
}

export default Home;
// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5001/api/posts');
//         setPosts(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching posts: ' + err.message);
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <Feed posts={posts} />
//     </div>
//   );
// }

//   const handlePostCreated = (newPost) => {
//     setPosts([newPost, ...posts]);
//   };

//   return { (
//     <div className="home-container">
//       <CreatePost onPostCreated={handlePostCreated} />
//       <Feed posts={posts} />
//     </div>
//   );
// };
// export default Home;