import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = ({type}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
  
  console.log(formData);

  return (
    <div className='register-container'>
      <h2>{type === 'front-store' ? 'Register Account' : 'Create User Account'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        <Link to={type == 'front-store' ? '/front-store/login' : ''}>
          <button type="submit">Register</button>
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
