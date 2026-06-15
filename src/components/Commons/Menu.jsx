import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png"; // Adjust path based on your folder tree
import Btn from './Btn';

function Menu({ show, handleClose }) {
  return (
    <Offcanvas 
      show={show} 
      onHide={handleClose} 
      placement="start" /* Slides out from the right side */
      className="custom-author-menu"
    >
      <Offcanvas.Header className="justify-content-between align-items-center border-0 px-4 pt-4">
        {/* Luxury Logo Identity on Left Side */}
        <NavLink to="/" className="menu-logo img-box-content" onClick={handleClose}>
          <img src={logo} alt="Capricia A Sloan Logo" style={{ maxWidth: "160px" }} />
        </NavLink>
        
        {/* Custom Minimalist Close Toggle Handle */}
        <button 
          type="button" 
          className="menu-close-btn" 
          onClick={handleClose} 
          aria-label="Close menu"
        >
          <i className="ri-close-line"></i> {/* Remix Icon Cross Handle */}
        </button>
      </Offcanvas.Header>

      <Offcanvas.Body className="px-4 py-5 d-flex flex-column justify-content-between">
        {/* Navigation List Stack */}
        <div className="menu-links-wrapper d-flex flex-column gap-4">
          <NavLink to="/" onClick={handleClose}>
            Home
          </NavLink>
          <NavLink to="/about-the-author" onClick={handleClose}>
            About The Author
          </NavLink>
          <NavLink to="/about-the-book" onClick={handleClose}>
            About The Book
          </NavLink>
          <NavLink to="/contact-us" onClick={handleClose}>
            Contact Us
          </NavLink>
        </div>

        {/* Bottom CTA Block Action Panel */}
        <div className="menu-action-footer mt-5 pt-4">
          <Btn 
            text={"Buy Now"} 
            className={"btn btn-theme  w-100 py-3 text-center"} 
            link="/buy-now" /* Change to your exact shop route */
            onClick={handleClose}
          />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Menu;