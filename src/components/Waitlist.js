import React from 'react';
import './Waitlist.css';

function Waitlist() {
  return (
    <div className="waitlist-section">
      {/* Form and Background Image */}
      <div className="content">
        <h1>Join the Fluid AI Waitlist Today!</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <div className="country-select">
            <img src="https://flagcdn.com/w40/ae.png" alt="UAE Flag" className="flag-icon" />
            <select>
              <option>United Arab Emirates</option>
              {/* Add more country options as needed */}
            </select>
          </div>
          <button type="submit">Join Waitlist</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src='logo.png' alt="Fluid AI Logo" className="footer-logo" />
          <p>© 2024 Fluid AI</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div>
              <h4>Our Features</h4>
              <h4>Areas</h4>
              <h4>FAQs</h4>
              <h4>The Waitlist</h4>
              <h4>Contact us</h4>
            </div>
            <div>
              <h4>Terms of Service</h4>
              <h4>Privacy Policy</h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Waitlist;
