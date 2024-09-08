import React from 'react';
import './SliderDescription.css'; // Import the CSS file for styling

const SliderDescription = () => {
  const events = [
    "Exciting sports events and competitions.",
    "Technical workshops and guest lectures.",
    "Cultural performances and seminars.",
    "Hands-on workshops and skill development."
  ];

  return (
    <>
      <section className="slider-description">
        <h2>Upcoming Events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

export default SliderDescription;
