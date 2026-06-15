import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Btn from "./Commons/Btn";
// 1. Import motion and AnimatePresence
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 2. Scroll entry configurations (Variants)
  const leftContentVariants = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="faq-section">
      <Container>
        <Row className="gy-5">
          {/* Left Column: Animated on Viewport Entry */}
          <Col md={12} lg={4}>
            <motion.div 
              className="faq-left-content"
              variants={leftContentVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span variants={itemVariants} className="faq-sub-heading">FAQ</motion.span>
              <motion.h2 variants={itemVariants} className="faq-main-heading">
                Lorem Ipsum <br /> Dolor Sit
              </motion.h2>
              <motion.p variants={itemVariants} className="faq-description">
                Suspendisse potenti. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Etiam feugiat,
                metus.
              </motion.p>
              <motion.div variants={itemVariants} className="btn-main">
                <Btn
                  text={"Get Started"}
                  className={"btn btn-theme btn-primary"}
                />
                <Btn
                  text={"Get Started"}
                  className={"btn btn-theme btn-primary btn-primary-border"}
                />
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Column: FAQ Accordion Stack */}
          <Col md={12} lg={8}>
            <motion.div 
              className="faq-accordion-container"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {faqData.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants} // Inherits parent entrance stagger
                    className={`faq-item ${isOpen ? "active" : ""}`}
                    onClick={() => toggleAccordion(index)}
                    role="button"
                    aria-expanded={isOpen}
                  >
                    {/* Header Layout */}
                    <div className="faq-header">
                      <h3 className="faq-question-text">
                        {item.id}. {item.question}
                      </h3>
                      {/* Smooth indicator icon flip */}
                      <motion.span 
                        className="faq-icon"
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        +
                      </motion.span>
                    </div>

                    {/* 3. Smooth expanding panel content wrapper */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="faq-body-wrapper"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }} // Keeps inner text bounded during slide
                        >
                          <div className="faq-body-content">
                            <p className="faq-answer-text">{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQAccordion;