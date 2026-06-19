import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Btn from "./Commons/Btn";

// Resource Asset Mapping Paths
import logo from "../assets/images/logo.png";
import flower from "../assets/images/flower.png";
import footerBg from "../assets/images/footer_bg.png"; // Dynamic inline backplate mapping
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="main-footer"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="footer-cta-card">
          <h2 className="footer-cta-heading">
            Stay Updated with My Latest Releases  and Exclusive Literary Insights.
          </h2>
          <div className="footer-input-group">
            <input
              type="email"
              placeholder="Enter your email address"
              className="footer-input"
              aria-label="Email subscription input"
            />
            <Btn className={"btn btn-theme btn-white"} text={"Subscribe"} />
          </div>
        </div>

        <Row
          className="gy-5 align-items-start position-relative"
          style={{ zIndex: 2 }} 
        >
          {/* Col 1: Brand Info, Desc & Social Links */}
          <Col md={12} lg={5}>
            <div className="footer-brand-column">
              <img
                src={logo}
                alt="Narrative Pen Logo"
                className="footer-logo-img"
              />
              <p className="footer-brand-desc">
                Beyond being a romance and suspense novel, A Night in Paris is much more about resilience, trust, and change. Victor Sage takes his readers on a fascinating exploration of the world of love, danger, and Parisian elegance. The novel offers multi-faceted characters, sincere feelings, and a story that strikes a perfect balance between intimacy and suspense.
              </p>
              <div className="footer-social-wrap">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-circle"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-circle"
                  aria-label="Twitter"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-circle"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-circle"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Separation Spacer Divider Column */}

          {/* Col 2: Navigation Links */}
          <Col sm={6} md={6} lg={3}>
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-the-book" className="footer-link-item"> 
                  About Book
                </Link>
              </li>
              <li>
                <Link to="/about-the-author" className="footer-link-item">
                  About Author
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="footer-link-item">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          {/* Col 3: Direct Contact Information Parameters */}
          <Col sm={6} md={6} lg={3}>
            <h4 className="footer-column-title">Get In Touch</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-row">
                <div className="footer-contact-icon">
                  <i className="ri-phone-fill"></i>
                </div>
                <a href="tel:+15551234567" className="footer-contact-link">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="footer-contact-row">
                <div className="footer-contact-icon">
                  <i className="ri-mail-fill"></i>
                </div>
                <a href="mailto:info@narrativepen.com" className="footer-contact-link">
                  info@narrativepen.com
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Decorative Leaf Layer Alignment */}
        <img src={flower} alt="" className="footer-decorative-flower" />

        <div className="footer-divider"></div>

        {/* Bottom Horizontal Copyright Strip */} 
        <Row>
          <Col md={12}>
            <div className="footer-copyright">
              <i className="ri-copyright-line"></i>
              <span>
                2026 Narrative Pen. All rights reserved. Built with passion for readers everywhere.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;