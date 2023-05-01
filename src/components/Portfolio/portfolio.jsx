/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Portfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio section-padding pb-70" id="productos">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                GALERÍA DE IMAGENES
              </h6>
              <h3 className="wow color-font">TIPOLOGÍAS</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                TODOS
              </span>
              <span data-filter=".loft">CASALOFT</span>
              <span data-filter=".paso">CASAPASO</span>
              <span data-filter=".duo">CASADUO</span>
              <span data-filter=".suite">CASASUITE</span>
              <span data-filter=".campo">CASACAMPO</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6 lg-mr"
                  : "col-12"
              } items campo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casacampo01.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items campo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casacampo02.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items campo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casacampo03.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items campo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casacampo04.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items loft wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaloft01.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items loft wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaloft02.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items loft wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaloft03.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items loft wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaloft04.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items loft wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaloft05.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items paso wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casapaso01.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items paso wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casapaso02.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items paso wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casapaso03.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items paso wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casapaso04.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items paso wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casapaso05.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items duo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaduo01.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items duo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaduo02.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items duo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaduo03.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items duo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaduo04.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items duo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaduo05.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items duo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaduo06.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items duo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaduo08.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items duo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaduo09.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items duo wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casaduo10.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items suite wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casasuite01.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items suite wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casasuite02.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items suite wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casasuite03.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items suite wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow">
                  <img src="/img/productos/casasuite04.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
