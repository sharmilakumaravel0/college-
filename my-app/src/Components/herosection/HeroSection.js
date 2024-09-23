import React, { useState } from 'react';
import { GrNavigate } from 'react-icons/gr'; // This import seems unused; consider removing it if not needed.

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    const heroStyle = {
        background: 'url("https://i.pinimg.com/originals/03/33/c1/0333c1e00f1b5a0cc08cfc24bbe4b156.jpg") no-repeat center center/cover',
        color: '#fff',
        textAlign: 'center',
        padding: '200px 60px',
    };

    const buttonStyle = {
        backgroundColor: isHovered ? '#a31b1b' : '#b71c1c',
        border: 'none',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '1em',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    };

    const navigateTo = (path) => {
        window.location.href = path;
    };

    return (
        <section id="home" style={heroStyle}>
            <div className="hero-content">
                <h1 className='vd'>Welcome to College Events</h1>
                <p className='e'><i>Your gateway to exciting campus events and activities!</i></p>
                <button
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => navigateTo('/events')}
                >
                    Explore Events
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
