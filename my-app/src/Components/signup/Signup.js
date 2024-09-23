import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5002/signup', { username, email, password });
            alert('Signup successful!');
        } catch (error) {
            alert('Signup failed');
        }
    };

    return (
        <>
        <div className='rr'>
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
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
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link>.</p>
        </div>
        </div>
        </>
        
    );
};

export default Signup;
