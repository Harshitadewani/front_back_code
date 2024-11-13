import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            alert('Sign up successful');
            // Logic for signing up and storing user info
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
