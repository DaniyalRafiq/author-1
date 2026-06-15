import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import Btn from "../components/Commons/Btn";
import HeroEllipse from "../assets/images/bg-Ellipse.png";
import MetaHelmet from "../components/Commons/Helmet";

const NotFound = () => {
  // 2. Define matching Bottom-to-Top Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Clean delay between the header and button
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 }, // Starts 40px lower and invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Smooth cubic-bezier ease-out
      },
    },
  };

  return (
    <>
      <MetaHelmet title={"Page Not Found"} />
      <section className="hero-section notfound-hero">
        {/* Decorative Graphic Element */}
        <img src={HeroEllipse} alt="Hero Ellipse" className="hero-ellipse" />

        <Container className="d-flex align-items-center justify-content-center h-100">
          {/* 3. Turn content wrapper into a motion container */}
          <motion.div
            className="notfound-center-content text-center hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 4. Minimal High-End Typography Header Animation */}
            <motion.h1 className="notfound-title" variants={itemVariants}>
              <span>404 Error</span> - Page <br /> Not Found
            </motion.h1>

            {/* 5. Action Redirection Wrapper Animation */}
            <motion.div
              className="notfound-action-wrapper"
              variants={itemVariants}
            >
              <Btn text="Return to Home" link="/" className="btn btn-theme" />
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
