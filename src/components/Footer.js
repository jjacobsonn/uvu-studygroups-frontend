import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-social-section">
          <hr className="footer-line-top" />
          <h4>Get Involved with UVU Study Groups on Social Media</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <span>UVU STUDY GROUPS</span> 
        <span className="footer-separator">•</span> 
        <span className="footer-email">uvu-study@uvu.edu</span> 
        <span className="footer-separator">•</span> 
        <span>(801) 863-8888</span> 
        <span className="footer-separator">•</span> 
        <span>ROOM CS-350</span>
      </div>
      <div className="footer-line"></div>
      <div className="footer-links">
        <div className="footer-section">
          <h5>STUDENT</h5>
          <div className="footer-links-content">
            <a href="#">Admissions</a>
            <a href="#">Academics</a>
            <a href="#">Campus Life</a>
            <a href="#">Looking to Attend UVU</a>
            <a href="#">Current Student</a>
            <a href="#">Accreditation</a>
          </div>
        </div>
        <div className="footer-section employee">
          <div className="footer-divider"></div>
          <h5>EMPLOYEES</h5>
          <div className="footer-links-content">
            <a href="#">Career Opportunities</a>
            <a href="#">Employee Resources</a>
            <a href="#">Directory</a>
            <a href="#">People & Culture</a>
          </div>
        </div>
        <div className="footer-section community">
          <div className="footer-divider"></div>
          <h5>COMMUNITY</h5>
          <div className="footer-links-content">
            <a href="#">Athletics</a>
            <a href="#">Visitors & Community</a>
            <a href="#">Office of the President</a>
            <a href="#">About UVU / History</a>
            <a href="#">Alumni</a>
            <a href="#">Inclusion & Diversity</a>
            <a href="#">Engage</a>
            <a href="#">Give to UVU</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="footer-section utility">
          <div className="footer-divider"></div>
          <h5>UTILITY</h5>
          <div className="footer-links-content">
            <a href="#">COVID-19 Info</a>
            <a href="#">Maps / Parking</a>
            <a href="#">Service Desk</a>
            <a href="#">Emergency</a>
            <a href="#">Police</a>
            <a href="#">Get Help</a>
            <a href="#">Search</a>
            <a href="#">Accessibility</a>
            <a href="#">Title IX / Equal Opportunity</a>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-info">
        <div className="footer-address">
          800 WEST UNIVERSITY PARKWAY, OREM, UT 84058 • (801) 863-8888 • © UTAH VALLEY UNIVERSITY
        </div>
        <div className="footer-terms">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Statement</a>
          <a href="#">Disability Compliant</a>
          <a href="#">Non-Discrimination</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-icons">
          <div className="news-events-icons">
            <div className="footer-icon">
              <img src={require('../icons/w-Communications.png')} alt="News Icon" />
              <span>News</span>
            </div>
            <div className="footer-icon">
              <img src={require('../icons/w-Calendar.png')} alt="Events Icon" />
              <span>Events</span>
            </div>
          </div>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
