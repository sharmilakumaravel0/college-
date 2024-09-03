import React from 'react';
import './EventCategories.css';
import Footer from '../footer/Footer';

const EventCategories = () => {
  return (
    <>
    <div className="event-categories-container">
   
      <div className="event-grid">
        {['Technical', 'Non-Technical', 'Online', 'Sports', 'Workshops', 'Job Fairs'].map(category => (
          <div key={category} className={`event-category ${category.toLowerCase().replace(/\s+/g, '-')}`}>
            {category} Events
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EventCategories;
