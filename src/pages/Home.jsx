import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Sec01 from "../components/Sec01";
import FAQAccordion from "../components/FAQS";
import Testimonials from "../components/Testimonials";
import sec01_img from "../assets/images/sec01_img.png";
import sec02_img from "../assets/images/sec02_img.png";
import Counter from "../components/Counter";
import Heroimg from "../assets/images/hero-img.png";
import MetaHelmet from "../components/Commons/Helmet";

const Home = ({ handleShow }) => {
  return (
    <>
        <MetaHelmet title={"Home"} />

      <HeroSection
        heroStrongText="Welcome to My World"
        handleShow={handleShow}
        heroheading={
          <>
            <h1>
              About the Book – A Night in Paris <span>By Victor Sage</span> 
            </h1>
          </>
        }
        Herodisc="Against the backdrop of the beautiful city of Paris, A Night in Paris is a romantic suspense book that delves into trust, vulnerability, and metamorphosis. In the book, we follow Tony, who is a very talented fashion designer with a traumatic past, and Alice Rose, a resilient woman who has a number of secrets to keep. What starts off as an unusual connection takes a romantic journey full of surprises and risks for both of the characters."
        RightBox={<img src={Heroimg} alt="" />}
      />

      <Sec01
        sec01Heading="About The Writer Victor Sage"
        sec01dsc="Victor Sage is a novelist whose books combine romance and suspense together with richly textured emotions. His work is known for well-developed characters, the theme of resilience, and the power of human relationships, which can change one's life."
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
      <Sec01
        sec01Heading="Writing Philosophy"
        sec01dsc="Victor Sage perceives writing not just as entertainment but as a reflection of our experiences. Love, faith, and change constitute the battlefield of life according to him, and all this is manifested through his works. With every book that he writes, he seeks to touch the emotions of the reader in such a way that the reader finds himself/herself in the character."
        img={sec02_img}
      />
      <FAQAccordion />
    </>
  );
};

export default Home;
