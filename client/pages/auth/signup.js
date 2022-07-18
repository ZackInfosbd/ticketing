import React, { useState } from 'react';
import axios from 'axios';

const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/users/signup', {
      email,
      password,
    });
    const data = await response.data;
    console.log(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default signup;
