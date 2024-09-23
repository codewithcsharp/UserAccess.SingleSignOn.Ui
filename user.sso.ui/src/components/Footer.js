import React from 'react';
import '../css/Footer.css';
import linkedin from '../css/Icons/linkedin-in-brands-solid.svg'
import facebook from '../css/Icons/facebook-f-brands-solid.svg'
import whatsapp from '../css/Icons/whatsapp-brands-solid.svg'
import instagram from '../css/Icons/instagram-brands-solid.svg'
import youtube from '../css/Icons/youtube-brands-solid.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>OUR BRANDS</h3>
          <ul>
            <li>USER-LOGO CONTINUUM</li>
            <li>TEST IO</li>
            <li>RELIABLE AI LAB</li>
          </ul>
          <div className="footer-column">
          <h3>SOLUTIONS HUB</h3>
          <p>
            Our enterprise software products are open source solutions, and
            accelerators on <a href="#">USER-LOGO Solutions Hub</a>.
          </p>
        </div>
        <div className="footer-column">
          <h3>PARTNERS</h3>
          <p>
            Learn more about our <a href="#">Alliances and Partnerships</a>.
          </p>
        </div>
        </div>

        <div className="footer-column policies">
          <h3>POLICIES</h3>
          <ul>
            <li>INVESTORS</li>
            <li>OPEN SOURCE</li>
            <li>PRIVACY POLICY</li>
            <li>PRC PRIVACY POLICY</li>
            <li>COOKIE POLICY</li>
            <li>APPLICANT PRIVACY NOTICE</li>
            <li>WEB ACCESSIBILITY</li>
            <li>UK MODERN SLAVERY STATEMENT</li>
            <li>RECRUITMENT FRAUD DISCLAIMER</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>SOCIAL</h3>
          <div className="social-icons">
            <a href="#"><img src = {linkedin} /></a>
            <a href="#"><img src = {facebook} /></a>
            <a href="#"><img src = {whatsapp} /></a>
            <a href="#"><img src = {instagram} /></a>
            <a href="#"><img src = {youtube} /></a>
          </div>
          <div className="footer-column">
          <h3>SOLUTIONS HUB</h3>
          <p>
            Our enterprise software products are open source solutions, and
            accelerators on <a href="#">USER-LOGO Solutions Hub</a>.
          </p>
        </div>
        <div className="footer-column">
          <h3>PARTNERS</h3>
          <p>
            Learn more about our <a href="#">Alliances and Partnerships</a>.
          </p>
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2024 USER-LOGO Systems, Inc. All Rights Reserved. USER-LOGO and the USER-LOGO are registered trademarks of USER-LOGO Systems, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
