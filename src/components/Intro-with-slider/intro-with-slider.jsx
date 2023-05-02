import React from "react";
import Link from "next/link";
import introData from "../../data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Particles from "react-tsparticles";
import particlesConfig from "../../config/particle-config";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";

import { Formik, Form, Field } from "formik";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="bg-imagen" data-overlay-dark="6">
                  <div className="form md-mb50">
                    <h4 className="fw-700 color-font mb-50">
                      Te interesa este proyecto?
                    </h4>
                    <Formik>
                      <Form
                        /* onSubmit={sendEmail} */ autoComplete="off"
                        id="contact-form"
                      >
                        <div className="messages" /* ref={messageRef} */></div>
                        <div className="controls">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              /*    value={input.name} */
                              placeholder="Nombre Completo"
                              required="required"
                              /*    onChange={(e) => handleOnChange(e)} */
                            />
                          </div>
                          <div className="form-group">
                            <Field
                              id="form_email"
                              type="email"
                              name="email"
                              placeholder="Email"
                              /*  onChange={(e) => handleOnChange(e)}
                              value={input.email} */
                            />
                            {/*  {errors.email ? <div>{errors.email}</div> : null} */}
                          </div>
                        </div>
                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Mensaje"
                            rows="4"
                            required="required"
                            /*  onChange={(e) => handleOnChange(e)}
                            value={input.message} */
                          />
                        </div>

                        <button type="submit" className="butn bord">
                          <span>Enviar Mensaje</span>
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        <div className="social-icon">
          <a
            href="https://www.tiktok.com/@tipaldepunilla"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://www.instagram.com/tipaldepunilla/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@tipaldepunilla"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider;
