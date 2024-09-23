import React, { useState, useEffect } from 'react';
import '../css/ImageSlider.css';
import image1 from '../Images/tech-1.jpg';
import image2 from '../Images/tech-13.jpg';
import image3 from '../Images/tech-14.jpg';
import image4 from '../Images/tech-15.jpg';

const ImageSlider = () => {
  const images = [image1, image2, image3, image4];

  // State to manage the current slider index and form steps
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormVisible, setFormVisible] = useState(false);
  const [formStep, setFormStep] = useState(1);

  // Handle slider transition
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  // Handle form visibility
  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  // Handle form navigation
  const nextFormStep = () => {
    setFormStep((prevStep) => prevStep + 1);
  };

  const prevFormStep = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider-container">
      {/* Image Slider */}
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Radio Buttons for Manual Control */}
      <div className="radio-buttons">
        {images.map((_, index) => (
          <input
            key={index}
            type="radio"
            checked={index === currentSlide}
            onChange={() => setCurrentSlide(index)}
            className="radio"
          />
        ))}
      </div>

      {/* Contact Us Button */}
      <button className="contact-us-button" onClick={toggleForm}>
        Contact Us
      </button>

      {/* Multi-Step Form (appears when Contact Us is clicked) */}
      {isFormVisible && (
        <div className="form-container">
          <div className="form-content">
            {formStep === 1 && (
              <div className="form-step">
                <h2>Registration Information</h2>
                <input type="text" placeholder="Your Name" />
                <button onClick={nextFormStep}>Next</button>
              </div>
            )}

            {formStep === 2 && (
              <div className="form-step">
                <h2>User Information</h2>
                <input type="email" placeholder="Your Email" />
                <button onClick={prevFormStep}>Previous</button>
                <button onClick={nextFormStep}>Next</button>
              </div>
            )}

            {formStep === 3 && (
              <div className="form-step">
                <h2>Current Address</h2>
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button onClick={prevFormStep}>Previous</button>
                <button onClick={() => alert('Form submitted!')}>
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
