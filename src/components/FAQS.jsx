import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Btn from "./Commons/Btn";
// 1. Import motion and AnimatePresence
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What is the plot of A Night in Paris?",
    answer:
      "It is a romantic suspense novel that takes place in elegant and mysterious Paris. It tells a story of Tony – a talented fashion designer whose life is burdened by painful memories and Alice Rose – an intelligent and determined woman who has her own secret. Gradually, their accidental meeting turns into an adventure of love, betrayal, and passion, full of danger and thrill.",
  },
  {
    id: 2,
    question: "What are the major characters?",
    answer:
      "This is a story of Tony – a brilliant and tortured designer, and Alice Rose – a clever and perceptive lady who was raised in discipline and resilience. Both of them have deep wounds caused by their painful experiences in the past, and their relationship will be checked for passion, revelation, and growing conflicts.",
  },
  {
    id: 3,
    question: "What are the main themes?",
    answer:
      "In his book, Victor Sage combines such ideas as love and loss, ambition and redemption, trust and faith. The author touches on the themes of healing and sacrifice, identity and the power of human connection. As a result, he proves that sometimes the greatest risk people take is not in war, but in love.",
  },
  {
    id: 4,
    question: "Which genre does A Night in Paris belong to?",
    answer:
      "It is a unique mixture of romance, mystery, and suspense with elements of espionage and emotional redemption. This novel gives readers a chance to enjoy a thriller in a romantic environment and to feel the real danger.",
  },
  {
    id: 5,
    question: "Why does Paris play such a crucial role in the story?",
    answer:
      "Paris is not just a setting of the novel, but the live character that adds additional depth to the story. The elegance of the fashion show runways and the darkness of the Parisian streets create a specific atmosphere of romance and suspense of this novel.",
  },
  {
    id: 6,
    question: "Who inspired you to write this book?",
    answer:
      "Victor Sage dedicates A Night in Paris to his wife, Polly, and daughter, Trinity. Their love and support gave rise to the creation of this novel.",
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
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={itemVariants} className="faq-description">
                Below is a list of six frequently asked questions regarding A Night in Paris by Victor Sage, formulated based on the information you provided and transformed into website-friendly content:
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