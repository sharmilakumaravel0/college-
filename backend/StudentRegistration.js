import React, { useState } from 'react';
import axios from 'axios';

function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/students/register', formData);
      alert(res.data.message);
    } catch (error) {
      console.error(error);
      alert('Error registering student');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default StudentRegistration;