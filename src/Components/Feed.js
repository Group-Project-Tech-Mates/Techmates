import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Feed.css';

const apiUrl = process.env.REACT_APP_API_URL;

function Feed({ posts }) {
  return (
    <div className="feed">
      {posts.map(post => (
        <div key={post._id} className="post">
          <h3>{post.user && post.user.username ? post.user.username : 'Unknown User'}</h3>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="Post" />}
        </div>
      ))}
    </div>
  );
}

export default Feed;