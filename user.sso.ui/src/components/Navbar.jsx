import React, { useState } from 'react';
import RegistrationRequest from '../apicomponents/RegistrationRequest';
import LoginRequest from '../apicomponents/LoginRequest';
import '../css/Navbar.css';
import userIcon from '../css/Icons/user-regular.svg';

const Navbar = () => {
  const [FormStep, setFormStep] = useState(1);
  const [IsLoginVisible, setLoginVisible] = useState(false);
  const [IsRegisterVisible, setRegisterVisible] = useState(false);
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

  const toggleRegister = () => {
    setRegisterVisible(!IsRegisterVisible);
    setLoginVisible(false);
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
          <LoginRequest LoginFormData={setLoginFormData}>
            <img src={userIcon} alt="User Profile" className="user-profile-icon" onClick={toggleLogin} />
          </LoginRequest>
        </div>
      </div>

      {/* Registration Form */}
      {IsRegisterVisible && (
        <div className="form-container register-container">
          <div className="form-content">
            {FormStep === 1 && (
              <div className="form-step">
                <h2>Registration Information</h2>
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
                <h2>User Information</h2>
                <input type="text" name="fullName" value={FormData.fullName} onChange={handleInputChange} placeholder="Full Name" />
                <input type="tel" name="mobileNumber" value={FormData.mobileNumber} onChange={handleInputChange} placeholder="Mobile Number" />
                <input type="text" name="aadharNumber" value={FormData.aadharNumber} onChange={handleInputChange} placeholder="Aadhar Number" />
                <input type="date" name="dob" value={FormData.dob} onChange={handleInputChange} placeholder="Date of Birth" />
                <div className="toggle-container">
                  <label>Are you a working professional?</label>
                  <input type="checkbox" name="isWorkingProfessional" checked={FormData.isWorkingProfessional} onChange={handleInputChange} />
                  <span>{FormData.isWorkingProfessional ? "Yes" : "No"}</span>
                </div>
                <button onClick={prevFormStep}>Previous</button>
                <RegistrationRequest FormData={FormData} OnSuccess={handleRegistrationSuccess} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Login Form */}
      {IsLoginVisible && (
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
