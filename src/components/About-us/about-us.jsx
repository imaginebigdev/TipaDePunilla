/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";

const AboutUs = () => {
  return (
    <section className="about-us section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-20 pt-0">
              <div>
                <img src={AboutUs1Date.logo} />
              </div>
              <h6
                className="fw-200 text-u ls10 mb-10"
                style={{ textAlign: "center" }}
              >
                {AboutUs1Date.smallTitle}
              </h6>
              <h6
                className="fw-600 text-u ls0 mb-0 pt-30 color-font"
                style={{ textAlign: "start" }}
              >
                {AboutUs1Date.title1}
              </h6>
              <h3
                className="fw-900 text-u ls0 mb-0 color-font"
                style={{ textAlign: "center" }}
              >
                {AboutUs1Date.title2}
              </h3>
              <h6
                className="fw-600 text-u ls0 mb-0 color-font"
                style={{ textAlign: "end" }}
              >
                {AboutUs1Date.title3}
              </h6>
            </div>
          </div>
          <div className="col-lg-7 img ">
            <img
              src={AboutUs1Date.image}
              style={{
                height: "600px",
                width: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
