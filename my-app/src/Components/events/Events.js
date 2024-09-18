// src/Events.js
import React from 'react';
import '../Assets/Technical_icon.png';
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
        <img src={Assets.Technical_icon.png} />  Technical Events
        </div>
        <div className="box non-technical" onClick={() => navigateTo('/nontech')}>
        <img src={Assets.NonTechnical_icon.png} /> Non-Technical Events
        </div>
        <div className="box online" onClick={() => navigateTo('/onlineevents')}>
      <img src={Assets.OnlineEvents_icon.png} /> Online Events
        </div>
        <div className="box sports" onClick={() => navigateTo('/sports')}>
        <img src={Assets.SportsEvent_icon.png} />  Sports
        </div>
        <div className="box workshops" onClick={() => navigateTo('/workshop')}>
        <img src={Assets.Workshop_icon.png} />  Workshops
        </div>
        <div className="box job-fairs" onClick={() => navigateTo('/jobfair')} >
        <img src={Assets.JobFair_icon.png} />
        Job Fair
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events