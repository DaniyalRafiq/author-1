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
              Stay in Touch with <span>Victor Sage</span>
            </h1>
          </>
        }
        Herodisc="Each and every tale is a dialogue, and Victor Sage appreciates the perspectives of his audience. If you have been inspired by the love and mystery in the book called A Night in Paris, if you would like to express your views on the journey of Tony and Alice, if you simply want to get in touch with the writer, your opinion counts. Contact Victor Sage to talk about his literature, his future projects, or his inspirations in general."
        RightBox={<Form />}
      />
      <FAQAccordion />
    </>
  );
};

export default ContactUs;
