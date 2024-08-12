// import React, { useState } from 'react';
// import axios from 'axios';
// import './CreatePost.css';

// const CreatePost = ({ onPostCreated }) => {
//   const [content, setContent] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const postData = {
//       content,
//     };

//     try {
//       const response = await axios.post('http://localhost:5001/api/posts', postData);
//       onPostCreated(response.data); // Update the feed with the new post
//       setContent(''); // Clear the content input
//     } catch (error) {
//       console.error('There was an error creating the post!', error);
//     }
//   };

//   return (
//     <div className="create-post">
//       <h2>Create a Post</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="What's on your mind?"
//           required
//         />
//         <button type="submit">Post</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;

import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css'; // Ensure you include your styling import './CreatePost.css';

const CreatePost = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      user: "USER_ID", // Replace with the actual user ID from your state or context
      content,
      image,
    };

    try {
      const response = await axios.post('http://localhost:5001/api/Posts', postData);
      onPostCreated(response.data); // Update the feed with the new post
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

// import React, { useState } from 'react';
// import axios from 'axios';
// import './CreatePost.css'; // Retain the old version's CSS import

// const CreatePost = ({ onPostCreated }) => {
//   const [content, setContent] = useState('');
//   const [image, setImage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const postData = {
//       user: "USER_ID", // Replace with the actual user ID from your state or context
//       content,
//       image
//     };

//     try {
//       const response = await axios.post('http://localhost:5001/api/posts', postData);
//       onPostCreated(response.data);
//       setContent('');
//       setImage('');
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   return (
//     <div className="create-post">
//       <h2>Create a Post</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="What's on your mind?"
//           required
//         />
//         <input
//           type="text"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//           placeholder="Image URL"
//         />
//         <button type="submit">Post</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;