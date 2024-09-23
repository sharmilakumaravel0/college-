import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import Footer from '../footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_0yh5i56';
    const templateID = 'template_pppaupp';
    const publicKey = 'ZXkyJinPZ1pd8Roxn';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      }, (err) => {
        console.error('FAILED...', err);
        alert(  `Failed to send message: ${JSON.stringify(err)} `);
      });

    setError('');
};

  return (
    <>
      <div className="BG">
        <div className="container4">
          <div className="contact-form">
            <h1 style={{ color: '#e74c3c' }}>Contact Us</h1>
            <form id="contactForm" onSubmit={handleSubmit}>
              <label htmlFor="name">
                <i className="fa fa-user" aria-hidden="true" style={{ color: '#e74c3c' }}></i> 
                Name:
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                required 
                value={formData.name} 
                onChange={handleChange} 
                style={{ borderColor: '#e74c3c' }}
              />
              
              <label htmlFor="company">
                <i className="fa fa-id-card" aria-hidden="true" style={{ color: '#e74c3c' }}></i> 
                Student Id:
              </label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                placeholder="Enter your Student Id" 
                required 
                value={formData.company} 
                onChange={handleChange} 
                style={{ borderColor: '#e74c3c' }}
              />
              
              <label htmlFor="email">
                <i className="fa fa-envelope" aria-hidden="true" style={{ color: '#e74c3c' }}></i> 
                Email:
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
                style={{ borderColor: '#e74c3c' }}
              />
              
              <label htmlFor="phone">
                <i className="fa fa-phone" aria-hidden="true" style={{ color: '#e74c3c' }}></i> 
                Phone:
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Enter your phone number" 
                required 
                value={formData.phone} 
                onChange={handleChange} 
                style={{ borderColor: '#e74c3c' }}
              />
              
              <label htmlFor="message">
                <i className="fa fa-comment" aria-hidden="true" style={{ color: '#e74c3c' }}></i> 
                Message:
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                placeholder="Type your message here" 
                required 
                value={formData.message} 
                onChange={handleChange} 
                style={{ borderColor: '#e74c3c' }}
              ></textarea>
              
              {error && <p className="error" style={{ color: '#e74c3c' }}>{error}</p>}

              <div className="button-group">
                <button type="submit" style={{ backgroundColor: '#e74c3c', color: '#fff' }}>
                  Submit
                </button>
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