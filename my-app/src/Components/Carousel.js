import React, { useState, useRef, useEffect } from 'react';
 // Ensure you have this CSS file for styling

function Carousel() {
  // State to manage the index of the current image
  const [index, setIndex] = useState(0);
  // Ref to access the carousel images container
  const carouselImagesRef = useRef(null);

  // Array of image URLs
  const images = [
    "https://www.knowafest.com/files/uploads/IMG-20240321-WA0031-2024032607.jpg",
    "https://www.knowafest.com/files/uploads/WhatsApp%20Image%202024-04-12%20at%208.19.02%20PM-2024041215.jpeg",
    "https://www.knowafest.com/files/uploads/symposium%20brouchure%20(2)-2024040403.jpg"
  ];

  // Function to update the translateX style based on the current index
  const showImage = (index) => {
    if (carouselImagesRef.current) {
      const width = carouselImagesRef.current.clientWidth;
      carouselImagesRef.current.style.transform = `translateX(${-index * width}px)`;
    }
  };

  // Event handler for the previous button
  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  // Event handler for the next button
  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  // Use useEffect to update the carousel position when the index changes
  useEffect(() => {
    showImage(index);
  }, [index]);

  // JSX structure with embedded JavaScript
  return (

    <div className="carousel">
      <div className="carousel-images" ref={carouselImagesRef}>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Event ${idx + 1}`} />
          
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-button" onClick={handlePrevClick}>&#10094;</button>
        <button className="carousel-button" onClick={handleNextClick}>&#10095;</button>
      </div>
    </div>
   
  );
}

export default Carousel;
