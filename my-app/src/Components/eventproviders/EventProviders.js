// src/Components/EventProvides.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Carousel from '../carousel/Carousel';
import EventsInfo from '../eventinfo/EventInfo';
import HeroSection from '../herosection/HeroSection';
import Testimonials from '../testimonials/Testimonials';
import FAQs from '../faqs/FAQs';
import ContactSection from '../contactsection/ContactSection';

const EventProvides = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const events = [
    {
      imgSrc: "https://i.pinimg.com/736x/e2/e3/53/e2e3531980da4fa10f37febfddce6f73.jpg",
      alt: "Sports",
      title: "Sports",
      description: "Participate in thrilling sports events.",
      onClick: () => navigate('/sports') // Navigate to sports
    },
    {
      imgSrc: "https://spechyd.ac.in/wp-content/uploads/2023/02/techitout.jpg",
      alt: "Technical",
      title: "Technical",
      description: "Attend technical workshops and lectures.",
      onClick: () => navigate('/technical') // Navigate to technical
    },
    {
      imgSrc: "https://www.knowafest.com/files/uploads/Sciensea%202k24%20poster-2024020508.jpg",
      alt: "Non-Technical",
      title: "Non-Technical",
      description: "Engage in non-technical activities and discussions.",
      onClick: () => navigate('/nontech') // Navigate to non-tech events
    },
    {
      imgSrc: "https://iper.ac.in/wp-content/uploads/2024/02/1-6.jpg",
      alt: "Cultural",
      title: "Online",
      description: "Enjoy cultural performances and events.",
      onClick: () => navigate('/onlineevents')
    },
    {
      imgSrc: "https://www.knowafest.com/files/uploads/BROUCHER-2024032512.jpg",
      alt: "Seminars",
      title: "Job Fair",
      description: "Attend insightful seminars from industry experts.",
      onClick: () => navigate('/jobfair')
    },
    {
      imgSrc: "https://www.knowafest.com/files/uploads/3D%20printing%20workshop%202024.jpg",
      alt: "Workshops",
      title: "Workshops",
      description: "Participate in hands-on workshops and skill-building sessions.",
      onClick: () => navigate('/workshop')
    }
  ];

  return (
    <>
      <HeroSection/>
      <EventsInfo/>
      <section className="event-provides">
        <h2>Event Provides</h2>
        <div className="event-items">
          {events.map((event, index) => (
            <div
              className="event-item"
              key={index}
              onClick={event.onClick} // Ensure this is set correctly
              style={{ cursor: 'pointer' }} // Optional: adds a pointer cursor on hover
            >
              <img src={event.imgSrc} alt={event.alt} />
              <p>{event.title}</p>
              <p className="description">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider"></div>
      <Testimonials/>
      <FAQs/>
      <Carousel/>
      <ContactSection/>
    </>
  );
}

export default EventProvides;
