import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-container">
      <h2>{props.storeType}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className='label'>Username</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <label htmlFor="password" className='label'>Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        <Link to={`/${props.type}/main`}>
          <button type="submit">Login</button>
        </Link>
      </form>
      {
        props.type === 'front-store' ? <p className='register-message'>You do not have an account? <Link to='/front-store/register'>Register here.</Link></p> : ''
      }
    </div>
  );
};

export default LoginForm;
