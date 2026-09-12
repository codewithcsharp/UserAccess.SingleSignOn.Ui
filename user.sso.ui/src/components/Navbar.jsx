import React, { useState } from 'react';
import RegistrationRequest from '../apicomponents/RegistrationRequest';
import LoginRequest from '../apicomponents/LoginRequest';
import '../css/Navbar.css';
import userIcon from '../css/Icons/user-regular.svg';

const Navbar = () => {
  const [FormStep, setFormStep] = useState(1);
  const [IsLoginVisible, setLoginVisible] = useState(false);
  const [IsRegisterVisible, setRegisterVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [FormData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    mobileNumber: '',
    aadharNumber: '',
    dob: '',
    isWorkingProfessional: true, // Default to true
  });
  const [passwordError, setPasswordError] = useState('');
  const [LoginFormData, setLoginFormData] = useState({ username: '', password: '' });

  const toggleLogin = () => {
    setLoginVisible(!IsLoginVisible);
    setRegisterVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleRegister = () => {
    setRegisterVisible(!IsRegisterVisible);
    setLoginVisible(false);
  };

  const closeAllForms = () => {
    setLoginVisible(false);
    setRegisterVisible(false);
    setFormStep(1);
    setPasswordError('');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const validatePasswords = () => {
    if (FormData.password !== FormData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const nextFormStep = () => {
    if (FormStep === 1 && !validatePasswords()) return;
    setFormStep((prevStep) => prevStep + 1);
  };

  const toggleWorkingProfessional = () => {
    setFormData((prevData) => ({
      ...prevData,
      isWorkingProfessional: !prevData.isWorkingProfessional,
    }));
  };

  const prevFormStep = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const handleRegistrationSuccess = () => {
    alert('Registration Successful!');
    setRegisterVisible(false); // Close form on successful registration
  };

  return (
    <nav className="navbar">
      {/* Navbar content */}
      <div className="navbar-left">
        <button
          type="button"
          className={`menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="menu-icon">&#x2630;</span>
        </button>
        <div className="logo">Epam Systems</div>
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-item">Services</li>
        <li className="navbar-item">Industries</li>
        <li className="navbar-item">Insights</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Careers</li>
      </ul>

      <div className="navbar-search" aria-label="Search">
        <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 2a8 8 0 015.98 13.78l4.26 4.27a1 1 0 01-1.41 1.41l-4.27-4.26A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" fill="currentColor" />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          aria-label="Search input"
        />
      </div>

      <div className="navbar-right">
        <div className="auth-switch">
          <button
            type="button"
            className={`auth-toggle-button ${IsLoginVisible ? 'active' : ''}`}
            onClick={toggleLogin}
          >
            Login
          </button>
          <button
            type="button"
            className={`auth-toggle-button ${IsRegisterVisible ? 'active' : ''}`}
            onClick={toggleRegister}
          >
            Register
          </button>
        </div>
        <div className="user-login">
          <LoginRequest LoginFormData={setLoginFormData}>
            <img src={userIcon} alt="User Profile" className="user-profile-icon" onClick={toggleLogin} />
          </LoginRequest>
        </div>
      </div>

      {/* Registration Form */}
      {IsRegisterVisible && (
        <div className="form-container register-container">
          <div className="form-content">
            <div className="form-header">
            </div>
            {FormStep === 1 && (
              <div className="form-step">
                <input type="text" id='username' name="username" value={FormData.username} onChange={handleInputChange} placeholder="Username" />
                <input type="email" id='email' name="email" value={FormData.email} onChange={handleInputChange} placeholder="Email Address" />
                <input type="password" id='password' name="password" value={FormData.password} onChange={handleInputChange} placeholder="Password" />
                <input type="password" id='confirmPassword' name="confirmPassword" value={FormData.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" />
                {passwordError && <p className="error">{passwordError}</p>}
                <button onClick={nextFormStep}>Next</button>
              </div>
            )}

            {FormStep === 2 && (
              <div className="form-step">
                <div className="form-header form-header-inline">
                  <button type="button" className="back-form-button" onClick={prevFormStep} aria-label="Go back to previous step">
                    ←
                  </button>
                  <button type="button" className="close-form-button" onClick={closeAllForms} aria-label="Close registration form">
                    ×
                  </button>
                </div>
                <input type="text" name="fullName" value={FormData.fullName} onChange={handleInputChange} placeholder="Full Name" />
                <input type="tel" name="mobileNumber" value={FormData.mobileNumber} onChange={handleInputChange} placeholder="Mobile Number" />
                <input type="text" name="aadharNumber" value={FormData.aadharNumber} onChange={handleInputChange} placeholder="Aadhar Number" />
                <input type="date" name="dob" value={FormData.dob} onChange={handleInputChange} placeholder="Date of Birth" />
                <div className="toggle-container">
                  <label>Are you a working professional?</label>
                  <button
                    type="button"
                    className={`toggle-button ${FormData.isWorkingProfessional ? 'enabled' : ''}`}
                    onClick={toggleWorkingProfessional}
                    aria-pressed={FormData.isWorkingProfessional}
                  >
                    <span className="toggle-knob" />
                  </button>
                  <span className="toggle-status">{FormData.isWorkingProfessional ? 'Yes' : 'No'}</span>
                </div>
                <RegistrationRequest FormData={FormData} OnSuccess={handleRegistrationSuccess} className="register-button" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Login Form */}
      {IsLoginVisible && (
        <div className="form-container login-container">
          <div className="form-content">
            <div className="form-header">
              <h2>Login Information</h2>
              <button type="button" className="close-form-button" onClick={closeAllForms} aria-label="Close login form">
                ×
              </button>
            </div>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={() => alert('Logged in!')}>Login</button>
            <div className="signup-link">
              <span>Don't have an account? </span>
              <button type="button" className="secondary-action-button" onClick={toggleRegister}>Sign up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
