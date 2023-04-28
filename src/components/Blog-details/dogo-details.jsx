/* eslint-disable @next/next/no-img-element */
import React from "react";

const DogoDetails = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/slid/slid-liebre.png" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">Descripción</h4>
                      <div className="spacial">
                        <p>
                          El motor corredizo para portón Dogo 350 es un modelo
                          recomendado para uso domiciliario o para portones de
                          bajo porte. El Dogo 350 es un motor resistente y
                          confiable, diseñado para brindar seguridad y comodidad
                          en la automatización de portones en el hogar. Además,
                          cuenta con una instalación sencilla y un
                          funcionamiento silencioso, lo que lo convierte en una
                          excelente opción para aquellos que buscan un motor de
                          alta calidad y eficiencia.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/productos/dogo.png" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/productos/dogo350.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <p>
                        Cuenta con un funcionamiento silencioso y una
                        instalación sencilla, lo que lo convierte en una
                        excelente opción para aquellos que buscan un motor de
                        alta calidad y eficiencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <a href="/pdf/manual-dogo.pdf" download className="btn-leermas">
            Descargar Instrucciones
          </a>
        </div>
      </div>
    </section>
  );
};

export default DogoDetails;
