import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Btn from "./Commons/Btn";
import flower from "../assets/images/flower.png";
// 1. Import motion
import { motion } from "framer-motion";

const Sec01 = ({ sec01Heading, sec01dsc, img, counter }) => {
  
  // 2. Define our stagger container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Gap between heading, text, counter, and button
      },
    },
  };

  // 3. Define our item reveal variants (sliding up and fading in)
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 70, damping: 18 } 
    },
  };

  // 4. Define variant for the main section image (fading and sliding from right)
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="sec-01">
      <Container>
        {/* Decorative Flower - simple fade in when visible */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          src={flower} 
          alt="" 
          className="flower-img" 
        />
        
        <Row>
          <Col md={12} lg={6}>
            {/* 5. Trigger the stagger sequence via whileInView */}
            <motion.div 
              className="sec-01-content"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }} // Animates once it's 20% visible
            >
              <motion.h2 variants={itemVariants}>{sec01Heading}</motion.h2>
              
              <motion.p variants={itemVariants}>{sec01dsc}</motion.p>
              
              {/* Wrapping props/components so they animate seamlessly */}
              <motion.div variants={itemVariants}>
                {counter}
              </motion.div>
              
              <motion.div variants={itemVariants} className="btn-main">
                <Btn text={"Get Started"} className={"btn btn-theme"} />
              </motion.div>
            </motion.div>
          </Col>
          
          <Col md={12} lg={6}>
            {/* 6. Right side image animating when in view */}
            <motion.div 
              className="img-box-content sec-01-img"
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={img} alt="" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Sec01;