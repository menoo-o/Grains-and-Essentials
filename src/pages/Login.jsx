import React, { useState } from 'react';
import '../App.css';

const CombinedForm = () => {
  const [activeForm, setActiveForm] = useState('signin');
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const [signUpForm, setSignUpForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignInChange = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  };

  const handleSignUpChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Form submitted:', signInForm, signUpForm);
  };

  return (
    <div className="combined-form-container">
      <div className="mobile-btn-container">
        <button
          className={activeForm === 'signin' ? 'active-btn' : ''}
          onClick={() => setActiveForm('signin')}
        >
          Sign In
        </button>
        <button
          className={activeForm === 'signup' ? 'active-btn' : ''}
          onClick={() => setActiveForm('signup')}
        >
          Sign Up
        </button>
      </div>

      {activeForm === 'signin' && (
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signInForm.email}
            onChange={handleSignInChange}
            autoComplete="off"
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signInForm.password}
            onChange={handleSignInChange}
            autoComplete="new-password"
          />
          <br />
          <button type="submit" className="orange-btn">
            Sign In
          </button>
        </form>
      )}

      {activeForm === 'signup' && (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={signUpForm.name}
            onChange={handleSignUpChange}
            autoComplete="off"
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signUpForm.email}
            onChange={handleSignUpChange}
            autoComplete="off"
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signUpForm.password}
            onChange={handleSignUpChange}
            autoComplete="new-password"
          />
          <br />
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={signUpForm.confirmPassword}
            onChange={handleSignUpChange}
            autoComplete="new-password"
          />
          <br />
          <button type="submit" className="orange-btn">
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default CombinedForm;
