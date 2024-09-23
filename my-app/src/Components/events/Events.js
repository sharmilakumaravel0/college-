// src/Events.js
import React from 'react';
import Technical_icon from '../Assets/Technical_icon[1].png';
import NonTechnical_icon from '../Assets/NonTechnical_icon.png';
import OnlineEvent_icon from '../Assets/OnlineEvent_icon.png';
import SportsEvent_icon from '../Assets/SportsEvent_icon[1].png';
import Workshop_icon from '../Assets/Workshop_icon.png';
import jobfair_icon from '../Assets/jobfair_icon[1].png'
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
          <img src={Technical_icon} alt='Technical_icon[1]' /> Technical Events
        </div>
        <div className="box non-technical" onClick={() => navigateTo('/nontech')}>
          <img src={NonTechnical_icon} alt='NonTechnical_icon' /> NonTechnical Events
        </div>
        <div className="box online" onClick={() => navigateTo('/onlineevents')}>
          <img src={OnlineEvent_icon} alt='OnlineEvent_icon' /> Online Events
        </div>
        <div className="box sports" onClick={() => navigateTo('/sports')}>
          <img src={SportsEvent_icon} alt='SportsEvent_icon[1]' /> Sports
        </div>
        <div className="box workshops" onClick={() => navigateTo('/workshop')}>
          <img src={Workshop_icon} alt='Workshop_icon' /> Workshops
        </div>
        <div className="box job-fairs" onClick={() => navigateTo('/jobfair')}>
          <img src={jobfair_icon} alt='jobfair_icon[1]' /> Job Fair
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events