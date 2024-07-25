// src/LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        alert(`Logged in with username: ${username}`);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Add registration logic here
        alert(`Registered with username: ${username}`);
    };

    const handleForgot = () => {
        // Logic for handling forgot username/password
        alert('Forgot Username/Password clicked');
    };

    const handleToggleMode = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <div className="login-form">
            <h1>{isRegistering ? 'Register' : 'Login'}</h1>
            <form onSubmit={isRegistering ? handleRegister : handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {isRegistering && (
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}
                <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            <button className="toggle-btn" onClick={handleToggleMode}>
                {isRegistering ? 'Already have an account? Login' : 'Don\'t have an account yet? Sign Up Now!'}
            </button>
            <button className="forgot-btn" onClick={handleForgot}>
                Forgot Username/Password?
            </button>
        </div>
    );
};

export default LoginForm;
