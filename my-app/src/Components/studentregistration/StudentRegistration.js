import React from 'react';
import Header from '../header/Header';



const StudentRegistration = () => {
    const validateForm = (event) => {
        event.preventDefault();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return false;
        }

        // If passwords match, you can submit the form here
        alert("Form submitted successfully!");
        return true;
    };

    return (
    
        <>
      
        <div className='back'>  
        <div className="container1">
            <h1>Student Registration</h1>
            <form onSubmit={validateForm}>
                <div className="form-group">
                    <label htmlFor="full-name">Full Name:</label>
                    <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="student-id">Student ID:</label>
                    <input type="text" id="student-id" name="student-id" placeholder="Enter your student ID" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <div className="gender-options">
                        <label><input type="radio" name="gender" value="Female" required /> Female</label>
                        <label><input type="radio" name="gender" value="Male" /> Male</label>
                        <label><input type="radio" name="gender" value="Other" /> Other</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="college-name">College Name:</label>
                    <select id="college-name" name="college-name" required>
                        <option value="" disabled selected>Select your College Name</option>
                        <option value="A.C. College of Technology">A.C. College of Technology</option>
                        <option value="Ethiraj College for Women">Ethiraj College for Women</option>
                        <option value="Hindustan Institute of Technology and Science">Hindustan Institute of Technology and Science</option>
                        <option value="KCG College of Technology">KCG College of Technology</option>
                        <option value="Loyola College">Loyola College</option>
                        <option value="Madras Christian College (MCC)">Madras Christian College (MCC)</option>
                        <option value="Meenakshi Sundararajan Engineering College">Meenakshi Sundararajan Engineering College</option>
                        <option value="M.O.P. Vaishnav College for Women">M.O.P. Vaishnav College for Women</option>
                        <option value="National Institute of Fashion Technology">National Institute of Fashion Technology (NIFT) Chennai</option>
                        <option value="Presidency College">Presidency College</option>
                        <option value="PSG College of Technology">PSG College of Technology</option>
                        <option value="Rajalakshmi Engineering College">Rajalakshmi Engineering College</option>
                        <option value="Sathyabama Institute of Science and Technology">Sathyabama Institute of Science and Technology</option>
                        <option value="Stella Maris College">Stella Maris College</option>
                        <option value="Sri Venkateswara College of Engineering">Sri Venkateswara College of Engineering</option>
                        <option value="Sri Ramachandra Institute of Higher Education and Research">Sri Ramachandra Institute of Higher Education and Research</option>
                        <option value="Sankara Nethralaya Medical College">Sankara Nethralaya Medical College</option>
                        <option value="Sree Sastha Institute of Engineering and Technology">Sree Sastha Institute of Engineering and Technology</option>
                        <option value="Velammal Engineering College">Velammal Engineering College</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="course">Course:</label>
                    <input type="text" id="course" name="course" placeholder="Enter your course" required />
                </div>
                <div className="form-group">
                    <label htmlFor="year-of-study">Year of Study:</label>
                    <input type="text" id="year-of-study" name="year-of-study" placeholder="Enter your year of study" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            
            </form>
        </div>
      </div>
   
        </>
    
    );
};

export default StudentRegistration;
