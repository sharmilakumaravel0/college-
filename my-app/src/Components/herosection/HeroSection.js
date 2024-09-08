import React from 'react';

const HeroSection = () => {
    // Inline styles for the hero section and its content
    const heroStyle = {
        background: 'url("https://i.pinimg.com/originals/03/33/c1/0333c1e00f1b5a0cc08cfc24bbe4b156.jpg") no-repeat center center/cover',
        color: '#fff',
        textAlign: 'center',
        padding: '200px 60px',
  
        
    };

    const buttonStyle = {
        backgroundColor: '#b71c1c',
        border: 'none',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '1em',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s'
    };

    const buttonHoverStyle = {
        backgroundColor: '#a31b1b'
    };

    // Function to scroll to a specific section
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" style={heroStyle}>
            <div className="hero-content">
                <h1>Welcome to College Events</h1>
                <p>Your gateway to exciting campus events and activities!</p>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                    onClick={() => scrollToSection('events')}
                >
                    Explore Events
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
