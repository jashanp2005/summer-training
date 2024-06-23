import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "./register.css";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShowPassword] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      await axios.post(
        'https://tbs-ye6x.onrender.com/auth/register',
        { name, email, password },
        config
      );
      alert("Registration is successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1 className='heading'>Register</h1>
      <form onSubmit={handleSubmit} className='authForm'>
        <label>
          Name:
          <input type="text" value={name} placeholder='Enter Name' onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} placeholder='Enter Email' onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type={show ? 'text' : 'password'}
            value={password} placeholder='*********'
            onChange={handlePasswordChange}
          />
        </label>
        <button type="button" className="toggleButton" onClick={toggleShowPassword}>
          {show ? 'Hide' : 'Show'}
        </button>
        <button type="submit" className="submitButton">Register</button>
        <Link to="/login">
          <button type="button" className="linkButton">Already Registered? Login</button>
        </Link>
      </form>
    </>
  );
};

export default Register;
