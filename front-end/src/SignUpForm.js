import React from 'react';
import { Form, Field } from 'react-final-form';

const SignupForm = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field name="email" component="input" type="email" placeholder="Email" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component="input" type="password" placeholder="Password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

export default SignupForm;
