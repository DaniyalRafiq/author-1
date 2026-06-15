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
        {/* Top Floating CTA Newsletter Box */}
        <div className="footer-cta-card">
          <h2 className="footer-cta-heading">
            Lorem Ipsum Dolor Sit Amet, <br /> Consectetur Adipiscing Elit. Sed
          </h2>
          <div className="footer-input-group">
            <input
              type="email"
              placeholder="Lorem ipsum"
              className="footer-input"
              aria-label="Email subscription input"
            />
            <Btn className={"btn btn-theme btn-white"} text={"Subscribe "} />
          </div>
        </div>

        {/* Center Main Directory Content Grid */}
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
                Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut
                Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis
                Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex
                Econsequat. Lorem Ipsum Dolor Sit Amet Consectetur.
              </p>
              <div className="footer-social-wrap">
                <a
                  to="#facebook"
                  className="footer-social-circle"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  to="#twitter"
                  className="footer-social-circle"
                  aria-label="Twitter"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a
                  to="#instagram"
                  className="footer-social-circle"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a
                  to="#linkedin"
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
            <h4 className="footer-column-title">Lorem ipsum</h4>
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
                <Link to="/contact" className="footer-link-item">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          {/* Col 3: Direct Contact Information Parameters */}
          <Col sm={6} md={6} lg={3}>
            <h4 className="footer-column-title">Lorem ipsum</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-row">
                <div className="footer-contact-icon">
                  <i className="ri-phone-fill"></i>
                </div>
                <span>00000000000</span>
              </div>
              <div className="footer-contact-row">
                <div className="footer-contact-icon">
                  <i className="ri-mail-fill"></i>
                </div>
                <span>example@gmail.com</span>
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
                2026. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                Nulla facilisi.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
