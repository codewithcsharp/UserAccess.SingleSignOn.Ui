import React, { useState } from 'react';
import RegistrationRequest from '../apicomponents/RegistrationRequest';
import LoginRequest from '../apicomponents/LoginRequest';
import '../css/Navbar.css';
import { CircleChevronLeft, CircleUserRound } from 'lucide-react';

const Navbar = ({ onDashboardClick }) => {
  const storedProfile = JSON.parse(localStorage.getItem('userProfile') || 'null');
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
    profilePhoto: '',
    isWorkingProfessional: true, // Default to true
  });
  const [passwordError, setPasswordError] = useState('');
  const [LoginFormData, setLoginFormData] = useState({ username: '', password: '' });
  const [userProfile, setUserProfile] = useState(storedProfile);

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

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prevData) => ({ ...prevData, profilePhoto: reader.result }));
    };
    reader.readAsDataURL(file);
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

  const handleLoginSuccess = (response) => {
    const profileData = response?.data || response?.user || response || {};
    const profile = {
      username: profileData.username || profileData.userName || LoginFormData.username,
      photoUrl: profileData.photoUrl || profileData.profilePhoto || profileData.photo || profileData.avatar,
    };

    localStorage.setItem('userProfile', JSON.stringify(profile));
    setUserProfile(profile);
    setLoginVisible(false);
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
        <li className="navbar-item">
          <button
            type="button"
            className="dashboard-nav-button"
            onClick={() => {
              onDashboardClick();
              setIsMenuOpen(false);
            }}
          >
            Dashboard
          </button>
        </li>
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
        <div className="user-login">
          <button type="button" className="profile-button" onClick={toggleLogin} aria-label={userProfile?.username ? `Signed in as ${userProfile.username}` : 'Open login form'}>
            {userProfile?.photoUrl ? (
              <img src={userProfile.photoUrl} alt="" className="user-profile-icon" />
            ) : (
              <CircleUserRound className="user-profile-icon" aria-hidden="true" />
            )}
            {userProfile?.username && <span>{userProfile.username}</span>}
          </button>
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
                    <CircleChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <button type="button" className="close-form-button" onClick={closeAllForms} aria-label="Close registration form">
                    ×
                  </button>
                </div>
                <input type="text" name="fullName" value={FormData.fullName} onChange={handleInputChange} placeholder="Full Name" />
                <input type="tel" name="mobileNumber" value={FormData.mobileNumber} onChange={handleInputChange} placeholder="Mobile Number" />
                <input type="text" name="aadharNumber" value={FormData.aadharNumber} onChange={handleInputChange} placeholder="Aadhar Number" />
                <label className="profile-photo-field" htmlFor="profilePhoto">
                  <span>Profile photo</span>
                  <input id="profilePhoto" type="file" name="profilePhoto" accept="image/*" onChange={handleProfilePhotoChange} />
                  {FormData.profilePhoto && <img src={FormData.profilePhoto} alt="Selected profile preview" className="profile-photo-preview" />}
                </label>
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
          <LoginRequest LoginFormData={LoginFormData} onSuccess={handleLoginSuccess}>
            {({ handleLogin, loading }) => (
              <div className="form-content">
            <div className="form-header">
              <h2>Login Information</h2>
              <button type="button" className="close-form-button" onClick={closeAllForms} aria-label="Close login form">
                ×
              </button>
            </div>
            <input type="text" name="username" value={LoginFormData.username} onChange={(event) => setLoginFormData({ ...LoginFormData, username: event.target.value })} placeholder="Username" />
            <input type="password" name="password" value={LoginFormData.password} onChange={(event) => setLoginFormData({ ...LoginFormData, password: event.target.value })} placeholder="Password" />
            <button onClick={handleLogin} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
            <div className="signup-link">
              <span>Don't have an account? </span>
              <button type="button" className="secondary-action-button" onClick={toggleRegister}>Sign up</button>
            </div>
            <div>
              
            </div>
              </div>
            )}
          </LoginRequest>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
