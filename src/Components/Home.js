import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Feed from './Feed';
import CreatePost from './CreatePost';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="home-container">
    
      <CreatePost onPostCreated={handlePostCreated} />
      <div className="feed-container">
        <Feed posts={posts} />
      </div>
    </div>
  );
}

export default Home;