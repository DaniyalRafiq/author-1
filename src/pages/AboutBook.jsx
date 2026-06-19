import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Sec01 from "../components/Sec01";
import FAQAccordion from "../components/FAQS";
import Testimonials from "../components/Testimonials";
import sec01_img from "../assets/images/sec01_img.png";
import sec02_img from "../assets/images/sec02_img.png";
import Counter from "../components/Counter";
import bookHeroimg from "../assets/images/book-hero-img.png";
import MetaHelmet from "../components/Commons/Helmet";

const AboutBook = ({ handleShow }) => {
  return (
    <div>
      <MetaHelmet title={"About the Book"} />
      <HeroSection
        heroStrongText="Welcome to My World"
        handleShow={handleShow}
        heroheading={
          <>
            <h1>
              About the Book – A Night in Paris <span> By Victor Sage</span>
            </h1>
          </>
        }
        Herodisc="Against the backdrop of the beautiful city of Paris, A Night in Paris is a romantic suspense book that delves into trust, vulnerability, and metamorphosis. In the book, we follow Tony, who is a very talented fashion designer with a traumatic past, and Alice Rose, a resilient woman who has a number of secrets to keep. What starts off as an unusual connection takes a romantic journey full of surprises and risks for both of the characters."
        RightBox={<img src={bookHeroimg} alt="" />}
      />
      <Sec01
        sec01Heading="Characters of A Night In Paris - Tony & Alice"
        sec01dsc="Tony is a talented designer with scars of his painful past on his mind. The character is ambitious, seeking redemption and finding his way to trust. Alice Rose is an intelligent, perceptive woman who represents resilience and discipline and has some dark secrets about herself. Their relationship is passionate but fragile and prone to revelations and conflicts."
        img={sec02_img}
      />
      <Testimonials />

      <FAQAccordion />
    </div>
  );
};

export default AboutBook;
