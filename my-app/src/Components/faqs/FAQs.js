import React from 'react';
import './FAQs.css'; // Import the CSS file for this component

const FAQs = () => {
    return (
        <>
        <div class="m">
                <section id="faqs" className="faqs">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
                <h4>What types of events do you organize?</h4>
                <p>We organize a wide range of events, including sports, cultural festivals, workshops, and more.</p>
            </div>
            <div className="faq-item">
                <h4>How can I get involved?</h4>
                <p>You can get involved by participating in events, volunteering, or reaching out to us for more opportunities.</p>
            </div>
            {/* Add more <div className="faq-item"> as needed */}
        </section>
        <div className="section-divider"></div>
        </div>
        </>
        
    );
};

export default FAQs;
