import React from 'react';
import '../css/DestinationSection.css';

import backgroundImage from '../Images/tech-12.jpg';
import cardImage1 from '../Images/tech-13.jpg';
import cardImage2 from '../Images/tech-14.jpg';
import cardImage3 from '../Images/tech-15.jpg';
import cardImage4 from '../Images/tech-2.jpg';

const destinations = [
  {
    location: 'Sierra Nevada - USA',
    title: 'YOSEMITE NATIONAL PARK',
    image: cardImage1,
  },
  {
    location: 'Taila - Spain',
    title: 'LOS LANCES BEACH',
    image: cardImage2,
  },
  {
    location: 'Cappadocia - Turkey',
    title: 'GÖREME VALLEY',
    image: cardImage3,
  },
  {
    location: 'Switzerland - Italy',
    title: 'SAINT ANTONIEN',
    image: cardImage4,
  },
];

const DestinationSection = () => {
  return (
    <section
      className="destination-section"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(17, 69, 92, 0.72) 0%, rgba(23, 44, 65, 0.54) 38%, rgba(17, 24, 39, 0.28) 100%), url(${backgroundImage})` }}
    >
      <div className="destination-content">
        <div className="destination-text">
          <div className="section-rule" />
          <p className="destination-location">Casablanca - Morocco</p>

          <h2 className="destination-title">
            MARRAKECH
            <br />
            MEROUGA
          </h2>

          <p className="destination-description">
            The journey from the vibrant souks and palaces of Marrakech to the
            tranquil, starit sands of Merouga showcases the diverse splendor of
            Morocco. Camel treks and desert camps offer an unforgettable immersion
            into the nomadic way of life.
          </p>

          <div className="destination-actions">
            <button className="primary-button">◉</button>
            <button className="secondary-button">DISCOVER LOCATION</button>
          </div>
        </div>

        <div className="destination-visual">
          <div className="destination-cards">
            {destinations.map((destination, index) => (
              <article
                key={destination.title}
                className={`destination-card ${index === 0 ? 'active-card' : ''}`}
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="destination-card-content">
                  <p className="destination-card-location">{destination.location}</p>
                  <h3 className="destination-card-title">{destination.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="destination-footer">
            <div className="destination-controls">
              <button className="control-button">&#8249;</button>
              <button className="control-button">&#8250;</button>
            </div>
            <div className="destination-counter">3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
