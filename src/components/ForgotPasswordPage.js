import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending reset password email
    if (email) {
      setMessage(`Password reset link sent to ${email}`);
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button type="submit">Send Reset Link</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
