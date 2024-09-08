import React from 'react';
import './ContactSection.css'; // Assuming you have a CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <div className="contact-content">
                <div className="contact-item">
                    <h3>Address</h3>
                    <p>123 College Lane, University Town, State, 12345</p>
                </div>
                <div className="contact-item">
                    <h3>Services</h3>
                    <p>Event Management, Coordination, Consultation</p>
                </div>
                <div className="contact-item">
                    <h3>Support</h3>
                    <p>For support, please email us at support@collegeevents.com or call us at (123) 456-7890</p>
                </div>
            </div>
            <div className="social-icons">
                <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div><br></br>
            <footer>
                <p>&copy; 2024 College Events. All rights reserved.</p>
            </footer>
        </section>
    );
}

export default ContactSection;
