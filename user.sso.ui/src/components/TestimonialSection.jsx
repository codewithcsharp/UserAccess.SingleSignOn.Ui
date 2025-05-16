import React, { useState } from 'react';
import '../css/TestimonialSection.css';

const testimonials = [
  {
    quote: "At USER-LOGO, I can broaden my horizons and grow professionally every day – there's always something new to solve.",
    name: "Iryna Kovalenko",
    title: "Delivery Manager",
  },
  {
    quote: "USER-LOGO provides an environment where I can constantly learn and challenge myself to innovate.",
    name: "John Doe",
    title: "Lead Developer",
  },
  {
    quote: "Every day brings new opportunities at USER-LOGO to work with the latest technologies and solve real-world problems.",
    name: "Jane Smith",
    title: "Senior Architect",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <h3 className="section-title">OUR PEOPLE</h3>
        <p className="quote">"{currentTestimonial.quote}"</p>
        <p className="author">{currentTestimonial.name}</p>
        <p className="author-title">{currentTestimonial.title}</p>

        {/* Navigation */}
        <div className="navigation">
          <button className="nav-button" onClick={handlePrevious}>
            &#8592;
          </button>
          <span className="counter">
            {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
          <button className="nav-button" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
