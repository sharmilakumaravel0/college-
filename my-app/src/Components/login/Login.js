import React, { useState } from 'react';

import Footer from '../footer/Footer';


const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            alert("All fields are required!");
            return;
        }
        // Additional validation or form submission logic can be added here
    };

    return (
        <>
        
        <div className='BACK'>
        <div className="container2">
            {/* Left side image */}
            <div className="image-section">
                <img
                    src="https://lh7-us.googleusercontent.com/gdGRedSlqmkUEvQNu6EPVu-xRXPqQPPYVjB686TIHH1wJ0iPnCklzcAlgOVtDik2wjAFvVwUBMFxi62gh2m199V5fbJlNrJGzKeQ5xgNSo4_tgEIm977ZC0Af5adCn7f8U2sM3i8vSqT6BZ5JF1NuZE=w400-h224"
                    alt="Login"
                />
            </div>
            
            {/* Right side login form */}
            <div className="form-section">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <i className="fas fa-user"></i>
                        <label txt="username">UserName</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-envelope"></i>
                        <label txt="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-lock"></i>
                        <label txt="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn">Login</button>
                        <a href="reset.html" className="btn reset-btn">Reset</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default Login;