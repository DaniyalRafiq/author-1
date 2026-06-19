import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Sec01 from "../components/Sec01";
import FAQAccordion from "../components/FAQS";
import Testimonials from "../components/Testimonials";
import sec01_img from "../assets/images/sec01_img.png";
import sec02_img from "../assets/images/sec02_img.png";
import Counter from "../components/Counter";
import AuthorHeroimg from "../assets/images/author-hero-img.png";
import MetaHelmet from "../components/Commons/Helmet";

const AboutAuthor = ({handleShow}) => {
  return (
    <>
      <MetaHelmet title={"About the Author"} />
      <HeroSection
        heroStrongText="Welcome to My World"
        handleShow={handleShow}
        heroheading={
          <>
            <h1>
              About The Author <span>Victor Sage</span></h1>
          </>
        }
        Herodisc="Victor Sage is a novelist whose books combine romance and suspense together with richly textured emotions. His work is known for well-developed characters, the theme of resilience, and the power of human relationships, which can change one's life."
        RightBox={<img src={AuthorHeroimg} alt="" />}
      />
      <Sec01
        sec01Heading="Debut Novel – A Night in Paris"
        sec01dsc="His debut novel, A Night in Paris, reflects his storytelling philosophy. It is a romantic suspense story that contains elements of elegance, mystery, and emotion. This novel delves into such themes as love, tragedy, ambition, and redemption, set against the backdrop of Paris."
        counter={
          <Counter
            countnumber1="02"
            countnumber1Disc="Lorem ipsum"
            countnumber2="02"
            countnumber2Disc="Lorem ipsum"
            countnumber3="02"
            countnumbe31Disc="Lorem ipsum"
          />
        }
        img={sec01_img}
      />
      <Testimonials />

      <FAQAccordion />
    </>
  );
};

export default AboutAuthor;
