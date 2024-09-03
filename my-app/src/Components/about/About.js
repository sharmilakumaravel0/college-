// src/components/About.js
import React from 'react';
import Footer from '../footer/Footer';
import './About.css'; // Import the CSS module

const About = () => (
    <>
    <div className='B'>
        <div className="about-container">
            <section className="about-content">
                <h1 className='ab'>About Us</h1>
                <p>
                    Event management is the application of project management to the creation and development of small and/or large-scale personal or corporate events.
                </p>
                <ul>
                    <li>Technical Events</li>
                    <p>
                        A “tech event” refers to any event which uses any form of technology. A tech event usually utilizes the following:
                        <ul>
                            <li>Increase in audience engagement.</li>
                            <li>Able to measure the success of the event.</li>
                            <li>Consistent communication.</li>
                        </ul>
                    </p>

                    <li>Non-Technical Events</li>
                    <p>
                        Non-Technical Skills ('NTS') are interpersonal skills which include:
                        <ul>
                            <li>Communication skills;</li>
                            <li>Leadership skills;</li>
                            <li>Team-work skills;</li>
                            <li>Decision-making skills;</li>
                            <li>Situation-awareness skills.</li>
                        </ul>
                    </p>

                    <li>Online Events</li>
                    <p>
                        A virtual event, also known as an online event, virtual conference, or livestream experience, is an event that involves people interacting in an online environment on the web, rather than meeting in a physical location.
                    </p>

                    <li>Workshops</li>
                    <p>
                        A workshop is an external or internal event that provides a structured learning session to people with similar interests and goals.
                    </p>

                    <li>Job Fairs</li>
                    <p>
                        An event at which people looking for a job can meet possible employers.
                    </p>

                    <li>Environmental & Social Responsibility Events</li>
                    <p>
                        Reducing pollution and emissions in manufacturing, recycling materials, replenishing natural resources.
                    </p>
                </ul>
            </section>
            <div className="image-section">
                <div className="image-container">
                    <img
                        src="https://iper.ac.in/wp-content/uploads/2024/02/1-6.jpg" // Replace with your image URL
                        alt="Event Management"
                    />
                </div>
                <div className="image-container">
                    <img
                        src="https://spechyd.ac.in/wp-content/uploads/2023/02/techitout.jpg" // Replace with your image URL
                        alt="Event Types"
                    />
                </div>
            </div>
        </div>
        </div>
        <Footer />
    </>
);

export default About;
