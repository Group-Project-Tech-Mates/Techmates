import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
    // Fetching posts from the backend API
    const response = await axios.get('http://localhost:5001/api/posts');
    setPosts(response.data); // Set the fetched posts into state
  } catch (error) {
    console.error('Error fetching posts:', error.message || error);
  }
};

fetchPosts(); // Call the function to fetch posts when the component mounts
}, []); // Empty dependency array ensures this runs only once when the component mounts

return (
  <div className="feed">
    {posts.length > 0 ? (
      posts.map(post => (
        <div key={post._id} className="post">
          <h3>{post.user?.username || 'Anonymous'}</h3>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="Post" />}
        </div>
      ))
    ) : (
      <p>No posts available</p>
    )}
  </div>
);
}

export default Feed;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Feed.css';

// const apiUrl = process.env.REACT_APP_API_URL;

// function Feed({ posts }) {
//   return (
//     <div className="feed">
//       {posts.map(post => (
//         <div key={post._id} className="post">
//           <h3>{post.user && post.user.username ? post.user.username : 'Unknown User'}</h3>
//           <p>{post.content}</p>
//           {post.image && <img src={post.image} alt="Post" />}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Feed;