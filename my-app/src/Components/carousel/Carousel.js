import React, { useState } from 'react';
import './Carousel.css'; // Import the specific CSS file for Carousel

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const showSlide = (newIndex) => {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    if (newIndex >= totalSlides) {
      setIndex(0);
    } else if (newIndex < 0) {
      setIndex(totalSlides - 1);
    } else {
      setIndex(newIndex);
    }

    const offset = -newIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
  };

  return (
    <>
      <h2 class="s">Upcoming Events</h2>  
    <div className="carousel">
      <div className="carousel-images">
    
       
       
     <img src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/02/SRM-Management-Commune.jpg" alt="Event Image 2" className="carousel-image" />
     <img src="https://www.knowafest.com/files/uploads/event%20logo-2024031822.jpeg" alt="Event Image 1" className="carousel-image" />
        <img src="https://www.knowafest.com/files/uploads/IMG-20240321-WA0031-2024032607.jpg" alt="Event Image 3" className="carousel-image" />
      </div>
      <button className="carousel-control left" onClick={() => showSlide(index - 1)}>‹</button>
      <button className="carousel-control right" onClick={() => showSlide(index + 1)}>›</button>
    </div>
     <div className="section-divider"></div>
     </>
  );
}

export default Carousel;
