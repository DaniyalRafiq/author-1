import HeroSection from "../components/HeroSection";
import FAQAccordion from "../components/FAQS";
import Form from "../components/Form";
import MetaHelmet from "../components/Commons/Helmet";

const ContactUs = ({handleShow}) => {
  return (
    <>
      <MetaHelmet title={"Contact Us"} />
      <HeroSection
        handleShow={handleShow}
        heroStrongText="Welcome to My World"
        heroheading={
          <>
            <h1>
              Lorem ipsum <span>dolor sit</span> amet, consectetur adipiscing
              elit
            </h1>
          </>
        }
        Herodisc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        RightBox={<Form />}
      />
      <FAQAccordion />
    </>
  );
};

export default ContactUs;
