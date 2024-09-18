import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5002/login', { email, password });
            alert('Login successful!');
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div className="auth-container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Go to Signup</Link></p>
        </div>
    );
};

export default Login;
