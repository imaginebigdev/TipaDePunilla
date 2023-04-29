/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contactanos</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Dirección</h6>
                    <p className="p-footer">
                      Eva Perón 680, Santa María de Punilla, Córdoba
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p className="p-footer">Tipaldepunilla@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Teléfono</h6>
                    <p className="p-footer">+5493513065851</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>DESTACADO</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <a>
                      <img src="/img/portfolio/logo02.png" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a>
                      <p className="p-footer">
                        Tipal de Punilla cuenta con un 5% de bosque nativo que
                        contribuye a la preservación del medio ambiente.
                      </p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <a>
                      <img src="/img/portfolio/logo04.png" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a>
                      <p className="p-footer">
                        Vivir en las sierras significa disfrutar de aire puro,
                        hermosos paisajes y un estilo de vida más relajado.
                      </p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <a>
                      <img src="/img/portfolio/logo03.png" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a>
                      <p className="p-footer">
                        La vida es más plena en una vivienda rodeada de áreas
                        verdes. El contacto con la naturaleza mejora la salud.
                      </p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
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
              <div className="copy-right">
                <p className="p-footer">
                  © 2023, TIPAL DE PUNILLA. MADE WITH PASSION BY{" "}
                  <Link href="https://imaginebig.dev">
                    <a target="_blank"> Imagine Big</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
