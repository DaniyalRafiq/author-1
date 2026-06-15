import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

// Use the clean global bundle import to bypass all modern Swiper conditional export errors
import "swiper/css/bundle";

// Import local profile images from your assets directory
import testiProfile1 from "../assets/images/testi_profile_1.png";
import testiProfile2 from "../assets/images/testi_profile_2.png";
import testiProfile3 from "../assets/images/testi_profile_3.png";
import testiProfile4 from "../assets/images/testi_profile_4.png";
import testiProfile5 from "../assets/images/testi_profile_5.png";
import Btn from "./Commons/Btn";

// 1. Import motion
import { motion } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "KYLE MERWIN",
    role: "CO-owner",
    image: testiProfile1,
    quote:
      "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
  },
  {
    id: 2,
    name: "KYLE MERWIN",
    role: "CO-owner",
    image: testiProfile2,
    quote:
      "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
  },
  {
    id: 3,
    name: "KYLE MERWIN",
    role: "CO-owner",
    image: testiProfile3,
    quote:
      "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
  },
  {
    id: 4,
    name: "KYLE MERWIN",
    role: "CO-owner",
    image: testiProfile4,
    quote:
      "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
  },
  {
    id: 5,
    name: "KYLE MERWIN",
    role: "CO-owner",
    image: testiProfile5,
    quote:
      "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // 2. Animation Configurations (Variants)
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const sliderContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
    },
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-decor-left"></div>

      <Container fluid className="px-0">
        
        {/* 3. Animated Section Header Area */}
        <motion.div 
          className="testimonials-header text-center px-3"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
        >
          <motion.span variants={headerItemVariants} className="testimonials-sub">
            Our Client
          </motion.span>
          <motion.h2 variants={headerItemVariants} className="testimonials-title">
            Lorem Ipsum
          </motion.h2>
          <motion.p variants={headerItemVariants} className="testimonials-lead mx-auto">
            Tristique Morbi Pulvinar Euismod Fringilla Blandit Proin Auctor
            Dignissim Quis Vitae <br />
            Ac Augue Suspendisse Vitae Non Turpis Vitae Senectus Neque
            Tristique.
          </motion.p>
        </motion.div>

        {/* 4. Animated Slider Wrapper (Fades up the whole block smoothly) */}
        <motion.div 
          className="swiper-slider-wrapper"
          variants={sliderContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            modules={[Navigation, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.2}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 0,
              stretch: -60,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1.5,
                coverflowEffect: { stretch: -40, depth: 100 },
              },
              992: {
                slidesPerView: 1.8,
                coverflowEffect: { stretch: -80, depth: 120 },
              },
              1200: {
                slidesPerView: 2.2,
                coverflowEffect: { stretch: -100, depth: 150 },
              },
            }}
            className="testimonials-swiper"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                {/* 5. Clean slide content layer inside Swiper */}
                <div className="testimonial-card-inner">
                  <div className="testimonial-img-box">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="testimonial-body-box">
                    <i className="ri-double-quotes-r testimonial-quote-icon"></i>
                    <p className="testimonial-quote-text">{item.quote}</p>
                    <div className="testimonial-meta">
                      <h4 className="testimonial-client-name">{item.name}</h4>
                      <span className="testimonial-client-role">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Controllers with Avatar Thumbs */}
          <div className="testimonials-navigation-row">
            <button
              className="nav-arrow nav-arrow-prev"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
            >
              <i className="ri-arrow-left-line"></i>
            </button>

            <div className="testimonials-thumbs-indicator">
              {testimonialsData.map((item, idx) => (
                <div
                  key={`thumb-${item.id}`}
                  className={`nav-avatar-thumb ${activeIndex === idx ? "active-thumb" : ""}`}
                  onClick={() => swiperRef.current?.slideToLoop(idx)}
                >
                  <img
                    src={item.image}
                    alt="Thumbnail avatar navigation item"
                  />
                </div>
              ))}
            </div>

            <button
              className="nav-arrow nav-arrow-next"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;