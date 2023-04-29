/* eslint-disable @next/next/no-img-element */
import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutUs4 = () => {
  console.clear();
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/intro/video.png" alt="" />
          </div>
          <div className="col-lg-4 valign">
            <div className="cont full-width">
              <h4 className="color-font">Vivir En La Sierra...</h4>
              <h6 className="pt-30">
                Es sinónimo de tranquilidad, aire puro y contacto con la
                naturaleza.
              </h6>
              {typeof window !== "undefined" && (
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="ecVOoZRqwis"
                  onClose={() => setOpen(false)}
                />
              )}
              <div className="vid-area">
                <div className="vid-icon">
                  <a
                    className="vid"
                    href="https://vimeo.com/127203262"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                  >
                    <div className="vid-butn back-color">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>
                <div className="valign">
                  <span className="text">Ver Video</span>
                </div>
              </div>
              <div className="states">
                <h2 className="color-font fw-700">
                  +20 <span className="fz-30">Lotes</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;
