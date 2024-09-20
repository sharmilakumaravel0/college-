// src/Events.js
import React from 'react';
import Footer from '../footer/Footer'; // Ensure this path is correct

function Events() {
  const navigateTo = (path) => {
    window.location.href = path; // Navigates to the specified path
  };

  return (
    <>
      <h1 className='t'>Events</h1>
      <div className="events">
        <div className="box technical" onClick={() => navigateTo('/technical')}>
          Technical Events
        </div>
        <div className="box non-technical" onClick={() => navigateTo('/nontech')}>
          Non-Technical Events
        </div>
        <div className="box online" onClick={() => navigateTo('/onlineevents')}>
          Online Events
        </div>
        <div className="box sports" onClick={() => navigateTo('/sports')}>
          Sports
        </div>
        <div className="box workshops" onClick={() => navigateTo('/workshop')}>
          Workshops
        </div>
        <div className="box job-fairs" onClick={() => navigateTo('/jobfair')} >
        <img />
        Job Fair
        </div>
      </div><br></br><br></br><br></br>
      <Footer />
    </>
  )
}

export default Events