import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Container } from "react-bootstrap";
import Btn from "./Commons/Btn";
import { Link, NavLink } from "react-router-dom";
import Menu from "./Commons/Menu";
// 1. Import motion from framer-motion
import { motion } from "framer-motion";

const Header = ({ handleShow }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const MenuShow = () => setShow(true);

  // 2. Define the stagger and fade configurations (Variants)
  const navContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays the animation of each child by 0.1s
        delayChildren: 0.2, // Waits 0.2s before starting the first child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 }, // Start invisible and 20px up
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    }, // Snap smoothly into place
  };

  return (
    <header>
      <Menu handleClose={handleClose} show={show} />
      <Container>
        {/* 3. Turn the wrapper into a motion.div to control the stagger */}
        <motion.div
          className="header-wrapper"
          variants={navContainerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Logo item */}
          <motion.div variants={itemVariants}>
            <NavLink to="/" className="logo img-box-content">
              <img src={logo} alt="Logo" />
            </NavLink>
          </motion.div>

          {/* Links Wrapper (using motion.div to pass stagger to inner links) */}
          <motion.div className="header-links" variants={navContainerVariants}>
            <motion.div variants={itemVariants}>
              <NavLink to={"/"}>Home</NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to={"/about-the-book"}>About Book</NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/about-the-author">About Author</NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink to="/contact-us">Contac Us</NavLink>
            </motion.div>
          </motion.div>

          {/* Button item */}
          <motion.div variants={itemVariants} className="header-btn">
            <Btn text={"Get Started"} className={"btn btn-theme"} onClick={handleShow} />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="header-btn responsive-btn"
          >
            <button className="menu-btn" onClick={MenuShow}>
              <i class="ri-menu-line"></i>
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </header>
  );
};

export default Header;
