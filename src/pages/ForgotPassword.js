import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'User not found.';
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      default:
        return 'An error occurred. Please try again.';
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('A password reset email has been sent to your email address.');
    } catch (err) {
      setError(err.code);
    }
  };

  return (
    <div className='login-container'>
        <div className='login-form'>
        <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      {error && <p>{getErrorMessage(error)}</p>}
      {message && <p>{message}</p>}
      <p>
        <Link to="/">Back to Login</Link>
      </p>
        </div>
      
    </div>
  );
};

export default ForgotPassword;
