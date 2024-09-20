import React, { useState } from 'react';
import './ContactUs.css';
import Footer from '../footer/Footer';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/send-email', formData);
        alert(response.data.message); // Show success message
        setFormData({ name: '', studentId: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
        console.error('Error sending email:', error.response ? error.response.data : error.message);
        alert('Failed to send message. Please try again.');
    }
};


  return (
    <>
      <div className="BG">
        <div className="container4">
          <div className="contact-form">
            <div className='header1'></div>
            <h1>Contact Us</h1>
            <form id="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              
              <label htmlFor="studentId">Student Id:</label>
              <input type="text" id="studentId" name="studentId" value={formData.studentId} onChange={handleChange} required />
              
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
              
              <div className="button-group">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
