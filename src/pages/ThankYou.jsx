import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import Btn from "../components/Commons/Btn";
import HeroEllipse from "../assets/images/bg-Ellipse.png";
import MetaHelmet from "../components/Commons/Helmet";

const ThankYou = () => {
  const location = useLocation();
  const userName = location.state?.userName || "Client";

  // 2. Define the Bottom-to-Top Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child element slightly for a clean sequenced effect
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 }, // Starts 40px down and invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Premium cubic-bezier ease-out curve
      },
    },
  };

  return (
    <>
      <MetaHelmet title={"Thank you Page"} />
      <section className="hero-section notfound-hero thank-you-hero">
        {/* Decorative Graphic Element */}
        <img src={HeroEllipse} alt="Hero Ellipse" className="hero-ellipse" />

        <Container className="d-flex align-items-center justify-content-center h-100">
          {/* 3. Turn the main content wrapper into a motion container */}
          <motion.div
            className="notfound-center-content text-center hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 4. Heading Animation */}
            <motion.h1 className="notfound-title" variants={itemVariants}>
              <span>Thank You, {userName}!</span> <br />
              Request Received
            </motion.h1>

            {/* 5. Paragraph Description Animation */}
            <motion.p
              className="thank-you-p my-4 mx-auto"
              variants={itemVariants}
              style={{
                maxWidth: "550px",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              Your professional academic assistance request has been logged
              successfully. One of our lead subject-matter experts is reviewing
              your instructions and will contact you via email shortly.
            </motion.p>

            {/* 6. Button Wrapper Animation */}
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

export default ThankYou;
