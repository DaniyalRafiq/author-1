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
            {" "}
            <h1>
              Home ipsum <span>dolor sit</span> amet, consectetur adipiscing
              elit
            </h1>{" "}
          </>
        }
        Herodisc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        RightBox={<img src={bookHeroimg} alt="" />}
      />
      <Sec01
        sec01Heading="Lorem ipsum"
        sec01dsc="Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam feugiat, metus nec malesuada aliquet, velit nulla luctus nisi, at dignissim elit magna vel nisi. Proin et sapien vel orci consequat consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sit amet augue eget justo tincidunt ultricies. Aliquam erat volutpat. Sed tristique ligula id odio dictum, nec fermentum purus consequat"
        img={sec02_img}
      />
      <Testimonials />

      <FAQAccordion />
    </div>
  );
};

export default AboutBook;
