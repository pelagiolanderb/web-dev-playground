import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudComponent = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editing, setEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const createPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
      });
      setPosts([...posts, response.data]);
      setTitle('');
      setBody('');
    } catch (error) {
      setError(error.message);
    }
  };

  const updatePost = async (id) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title,
        body,
      });
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      setEditing(false);
      setTitle('');
      setBody('');
      setCurrentPost(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditClick = (post) => {
    setEditing(true);
    setCurrentPost(post);
    setTitle(post.title);
    setBody(post.body);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setCurrentPost(null);
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h1>CRUD with Axios</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {editing ? (
        <div>
          <h2>Edit Post</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updatePost(currentPost.id);
            }}
          >
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
            <button type="submit">Update Post</button>
            <button type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Create Post</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createPost();
            }}
          >
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
            <button type="submit">Add Post</button>
          </form>
        </div>
      )}
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleEditClick(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
