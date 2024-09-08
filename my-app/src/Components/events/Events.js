// src/Events.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
 // Ensure this path is correct

function Events() {
  return (
    <>
      <h1 className='t'>Events</h1>
      <div className="events">
        <div className="box technical">Technical Events</div>
        <div className="box non-technical">Non-Technical Events</div>
        <div className="box online">Online Events</div>
        <div className="box sports">  <Link to="/sports">Sports</Link></div>
        <div className="box workshops">
          <Link to="/workshop">Workshop</Link>
        </div>
        <div className="box job-fairs">
          <Link to="/jobfair">Job Fair</Link>
        </div>
        <div className="box social-responsibility">Environmental & Social Responsibility Events</div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
