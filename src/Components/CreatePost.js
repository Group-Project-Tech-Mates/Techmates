import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css';

const CreatePost = ({ onPostCreated, user }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const postData = {
      user: user ? user.id : null, // Pass the user's ID if they are logged in, otherwise null
      content,
      image,
    };

    try {
      // Replace with the URL of your deployed backend API
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/posts`, postData);            onPostCreated(response.data); // Update the feed with the new post
      setContent(''); // Clear the content input
      setImage(''); // Clear the image input
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="create-post">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;