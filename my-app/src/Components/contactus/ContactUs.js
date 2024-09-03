// src/components/ContactUs/ContactUs.js
import React from 'react';
import './ContactUs.css';
import Footer from '../footer/Footer';

const ContactUs = () => {
  return (
    <>
    <div className="BG">
    <div className="container4">
      <div className="contact-form">
        <div className='header1'></div>
        <h1>Contact Us</h1>
        <form id="contactForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="company">Student Id:</label>
          <input type="text" id="company" name="company" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          
          <div className="button-group">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default ContactUs;
