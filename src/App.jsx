import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutBook from "./pages/AboutBook";
import AboutAuthor from "./pages/AboutAuthor";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/Commons/ScrollToTop";
import Form from "./components/Form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import MetaHelmet from "./components/Commons/Helmet";
import ThankYou from "./pages/ThankYou";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <ScrollToTop />

      <Header handleShow={handleShow} />
      <Routes>
        <Route path="/" element={<Home handleShow={handleShow} />} />
        <Route path="/about-the-book" element={<AboutBook handleShow={handleShow} />} />
        <Route path="/about-the-author" element={<AboutAuthor handleShow={handleShow} />} />
        <Route path="/contact-us" element={<ContactUs handleShow={handleShow} />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Modal show={show} onHide={handleClose}>
        <button className="close-btn" onClick={handleClose}>
          <i class="ri-close-line"></i>
        </button>
        <Modal.Body>
          <Form closeModal={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
