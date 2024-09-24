import React, { useState, useEffect } from "react";
import "../css/ImageSlider.css";

import image1 from "../Images/tech-12.jpg";
import image2 from "../Images/tech-13.jpg"; // Use different image files
import image3 from "../Images/tech-14.jpg";
import image4 from "../Images/tech-15.jpg"; // Use different image files

const images = [image1, image2, image3, image4];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length === 0) return; // Prevent interval if no images are present

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval); // Clean up the interval
  }, []);

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="radio-buttons">
        {images.map((_, index) => (
          <input
            key={index}
            type="radio"
            className="radio"
            checked={index === currentSlide}
            onChange={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
