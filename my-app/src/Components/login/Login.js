import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5002/login', { email, password });
            alert('Login successful!');
            navigate('/'); // Redirect to home page (EventProvides component)
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div className='rr'>
            <div className="auth-container">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Log In</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign up here</Link>.</p>
            </div>
        </div>
    );
};

export default Login;
