import React from 'react';
import Carousel from '../carousel/Carousel';
import EventsInfo from '../eventinfo/EventInfo';
import HeroSection from '../herosection/HeroSection';
import Testimonials from '../testimonials/Testimonials';
import FAQs from '../faqs/FAQs';
import ContactSection from '../contactsection/ContactSection';

 // Import the CSS file for styling

const EventProvides = () => {
  const events = [
    {
      imgSrc: "https://i.pinimg.com/736x/e2/e3/53/e2e3531980da4fa10f37febfddce6f73.jpg",
      alt: "Sports",
      title: "Sports",
      description: "Participate in thrilling sports events."
    },
    {
      imgSrc: "https://spechyd.ac.in/wp-content/uploads/2023/02/techitout.jpg",
      alt: "Technical",
      title: "Technical",
      description: "Attend technical workshops and lectures."
    },
    {
      imgSrc: "https://www.knowafest.com/files/uploads/Sciensea%202k24%20poster-2024020508.jpg",
      alt: "Non-Technical",
      title: "Non-Technical",
      description: "Engage in non-technical activities and discussions."
    },
    {
      imgSrc: "https://iper.ac.in/wp-content/uploads/2024/02/1-6.jpg",
      alt: "Cultural",
      title: "Cultural",
      description: "Enjoy cultural performances and events."
    },
    {
      imgSrc: "https://www.knowafest.com/files/uploads/BROUCHER-2024032512.jpg",
      alt: "Seminars",
      title: "Seminars",
      description: "Attend insightful seminars from industry experts."
    },
    {
      imgSrc: "https://www.knowafest.com/files/uploads/3D%20printing%20workshop%202024.jpg",
      alt: "Workshops",
      title: "Workshops",
      description: "Participate in hands-on workshops and skill-building sessions."
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
            <div className="event-item" key={index}>
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
