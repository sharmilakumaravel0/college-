import React from 'react';
import './Testimonials.css'; // Import the CSS file for this component

const Testimonials = () => {
    return (
        <>
        <div class="i">
        <section id="testimonials" className="testimonials">
            <h2>What Our Attendees Say</h2>
            <div className="testimonial-card">
                <p>"The events were well-organized and incredibly fun! I made so many great memories."</p>
                <h3>- John Doe</h3>
            </div>
            {/* Add more <div className="testimonial-card"> as needed */}
        </section>
        <div className="section-divider"></div>
        </div>
        </>
    );
};

export default Testimonials;
