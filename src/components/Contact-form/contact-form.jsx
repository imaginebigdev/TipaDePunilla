import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";

const ContactForm = () => {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">
                A 20km de Villa Carlos Paz
              </h4>
            </div>
            <p>
              Es una comuna a 20 km de Rosario, dentro de Santa María de Punilla
              ciudad serrana con todos los servicios. Santa María registra un
              crecimiento demográfico de un 30% en los últimos años, considerada
              como ciudad icono de la cultura y la música. Los amaneceres y los
              atardeceres ofrecen un escenario auditivo de fauna silvestre que
              se disfruta tanto para hacer deportes como para cualquier
              actividad de ocio o recreación.
            </p>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contactanos</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              <h3 className="wow" data-splitting>
                Visitanos.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>

              <div className="social pt-30">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
