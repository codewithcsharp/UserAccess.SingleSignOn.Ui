import React, { useState } from 'react';
import RegistrationRequest from '../UtilityService/RegistrationRequest'; // Import the API function
import '../css/Navbar.css';
import userIcon from '../css/Icons/user-regular.svg';

const Navbar = () => {
  const [FormStep, setFormStep] = useState(1);
  const [IsLoginVisible, setLoginVisible] = useState(false);
  const [IsRegisterVisible, setRegisterVisible] = useState(false);
  const [FormData, setFormData] = useState({username: '', email: '', password: '', confirmPassword: '',
    fullName: '', mobileNumber: '', aadharNumber: '', dob: '', street: '', city: '', state: '', postalCode: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const toggleLogin = () => {
    setLoginVisible(!IsLoginVisible);
    setRegisterVisible(false);
  };

  const toggleRegister = () => {
    setRegisterVisible(!IsRegisterVisible);
    setLoginVisible(false); // Hide login form when register is toggled
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
      {IsRegisterVisible && (
        <div className="form-container register-container">
          <div className="form-content">
            {FormStep === 1 && (
              <div className="form-step">
                <h2>Registration Information</h2>
                <input type="text" name="username" value={FormData.username} onChange={handleInputChange} placeholder="Username" />
                <input type="email" name="email" value={FormData.email} onChange={handleInputChange} placeholder="Email Address" />
                <input type="password" name="password" value={FormData.password} onChange={handleInputChange} placeholder="Password" />
                <input type="password" name="confirmPassword" value={FormData.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" />
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
                <button onClick={prevFormStep}>Previous</button>
                <button onClick={nextFormStep}>Next</button>
              </div>
            )}

            {FormStep === 3 && (
              <div className="form-step">
                <h2>Current Address</h2>
                <input type="text" name="street" value={FormData.street} onChange={handleInputChange} placeholder="Street Name" />
                <input type="tel" name="city" value={FormData.city} onChange={handleInputChange} placeholder="City Name" />
                <input type="text" name="state" value={FormData.state} onChange={handleInputChange} placeholder="State Name" />
                <input type="text" name="postalCode" value={FormData.postalCode} onChange={handleInputChange} placeholder="Postal Code" />
                <button onClick={prevFormStep}>Previous</button>
                <button onClick={nextFormStep}>Next</button>
              </div>
            )}

            {FormStep === 4 && (
              <div className="form-step">
                <h2>Permanent Address</h2>
                <input type="text" name="street" value={FormData.street} onChange={handleInputChange} placeholder="Street Name" />
                <input type="tel" name="city" value={FormData.city} onChange={handleInputChange} placeholder="City Name" />
                <input type="text" name="state" value={FormData.state} onChange={handleInputChange} placeholder="State Name" />
                <input type="text" name="postalCode" value={FormData.postalCode} onChange={handleInputChange} placeholder="Postal Code" />
                <button onClick={prevFormStep}>Previous</button>
                <RegistrationRequest FormData = {FormData} OnSuccess={() => alert('Registration Successful!')}>Submit</RegistrationRequest>
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
