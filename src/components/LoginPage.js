import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (username === 'test' && password === 'test123') {
            
            alert('Login successful');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember me
                </label>
                <button type="submit">Login</button>
            </form>
            <div className="links">
                <Link to="/signup">New User? Sign Up</Link>
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
        </div>
    );
};

export default LoginPage;
