import React from "react";
import HeroEllipse from "../assets/images/bg-Ellipse.png";
import Heroimg from "../assets/images/hero-img.png";

import { Container, Row, Col } from "react-bootstrap";
import Btn from "./Commons/Btn";
// 1. Import motion
import { motion } from "framer-motion";

const HeroSection = ({
  heroStrongText,
  Herodisc,
  heroheading,
  RightBox,
  handleShow,
}) => {
  // 2. Define variants for the text side (Stagger container)
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Time gap between strong text, heading, paragraph, and button
        delayChildren: 0.1,
      },
    },
  };

  // 3. Define how individual text elements slide up
  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // 4. Define variants for the right side element (slides in from the right)
  const rightBoxVariants = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.4 },
    },
  };

  return (
    <section className="hero-section">
      {/* Background Ellipse fading in quietly */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={HeroEllipse}
        alt="Hero Ellipse"
        className="hero-ellipse"
      />

      <h4 className="auth-bototm">Author Website</h4>

      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} lg={6}>
            {/* 5. Turn content wrapper into a motion.div to drive the stagger */}
            <motion.div
              className="hero-content"
              variants={contentContainerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.strong
                variants={textItemVariants}
                style={{ display: "block" }}
              >
                {heroStrongText}
              </motion.strong>

              <motion.div variants={textItemVariants}>{heroheading}</motion.div>

              <motion.p variants={textItemVariants}>{Herodisc}</motion.p>

              <motion.div variants={textItemVariants}>
                <Btn
                  className={"btn btn-theme"}
                  text={"Get Started"}
                  onClick={handleShow}
                />
              </motion.div>
            </motion.div>
          </Col>

          <Col xs={12} md={12} lg={6}>
            {/* 6. Animate the right box component coming from the right */}
            <motion.div
              className="img-box-content"
              variants={rightBoxVariants}
              initial="hidden"
              animate="show"
            >
              {RightBox}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
