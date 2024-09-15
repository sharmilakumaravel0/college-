// src/components/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Registration = ({ eventName }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    phoneNumber: '',
    collegeName: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit the registration data to the server (json-server)
      const response = await axios.post('http://localhost:3000/registrations', {
        ...formData,
        eventTitle: eventName // Include event name in registration
      });

      // Navigate to the registration summary with form data
      navigate('/registration-summary', { state: { formData, eventTitle: eventName } });
    } catch (error) {
      console.error('Error submitting registration:', error);
    }
  };

  return (
    <div className="registration-container">
      <h1>Register for {eventName}</h1>
      <form onSubmit={handleSubmit}>
        <label>Student Name:</label>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
        /><br />

        <label>Student Email:</label>
        <input
          type="email"
          name="studentEmail"
          value={formData.studentEmail}
          onChange={handleChange}
          required
        /><br />

        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        /><br />

        <label>College Name:</label>
        <input
          type="text"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
          required
        /><br />

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
};

export default Registration;