import React, { useState } from 'react';
import '../css/Navbar.css';
import userIcon from '../css/Icons/user-regular.svg';

const Navbar = () => {
  const [formStep, setFormStep] = useState(1);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
    setRegisterVisible(false); // Hide register form when login is toggled
  };

  const toggleRegister = () => {
    setRegisterVisible(!isRegisterVisible);
    setLoginVisible(false); // Hide login form when register is toggled
  };

  const nextFormStep = () => {
    setFormStep((prevStep) => prevStep + 1);
  };

  const prevFormStep = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button">
          <span className="menu-icon">&#x2630;</span>
        </button>
        <div className="logo">USER-LOGO</div>
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">Services</li>
        <li className="navbar-item">Industries</li>
        <li className="navbar-item">Insights</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Careers</li>
      </ul>

      <div className="navbar-right">
        <button className="login-button" onClick={toggleLogin}> Login </button>
        <div className="user-login">
          <img
           src={userIcon}
           alt="User Login"
           className="user-login-icon"
          />
        </div>
      </div>

      {/* Registration Form */}
      {isRegisterVisible && (
        <div className="form-container register-container">
          <div className="form-content">
            {formStep === 1 && (
              <div className="form-step">
                <h2>Registration Information</h2>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button onClick={nextFormStep}>Next</button>
              </div>
            )}

            {formStep === 2 && (
              <div className="form-step">
                <h2>User Information</h2>
                <input type="text" placeholder="Full Name" />
                <input type="tel" placeholder="Mobile Number" />
                <input type="text" placeholder="Aadhar Number" />
                <input type="date" placeholder="Date of Birth" />
                <button onClick={prevFormStep}>Previous</button>
                <button onClick={nextFormStep}>Next</button>
              </div>
            )}

            {formStep === 3 && (
              <div className="form-step">
                <h2>Current Address</h2>
                <input type="text" placeholder="Street Name" />
                <input type="tel" placeholder="City Name" />
                <input type="text" placeholder="State Name" />
                <input type="text" placeholder="Postal Code" />
                <button onClick={prevFormStep}>Previous</button>
                <button onClick={nextFormStep}>Next</button>
              </div>
            )}

            {formStep === 4 && (
              <div className="form-step">
                <h2>Permanent Address</h2>
                <input type="text" placeholder="Street Name" />
                <input type="tel" placeholder="City Name" />
                <input type="text" placeholder="State Name" />
                <input type="text" placeholder="Postal Code" />
                <button onClick={prevFormStep}>Previous</button>
                <button onClick={() => alert('Form submitted!')}>Submit</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Login Form */}
      {isLoginVisible && (
        <div className="form-container login-container">
          <div className="form-content">
            <h2>Login Information</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={() => alert('Logged in!')}>Login</button>
            <div className="signup-link">
              <span>Don't have an account? </span>
              <a href="#" onClick={toggleRegister}>Sign up</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
