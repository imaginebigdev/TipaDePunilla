import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";

const ContactSlid = () => {
  const messageRef = React.useRef(null);

  const [errors, setErrors] = useState({
    email: "",
  });
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validador = (inputs) => {
    let validations = {};
    const emailExpresion =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!inputs.email) {
      validations.email = "Debe ingresar su email";
    } else if (!emailExpresion.test(inputs.email)) {
      validations.email = "Ingrese un email válido";
    }
    return validations;
  };

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    const errores = validador({ ...input, [e.target.name]: e.target.value });
    setErrors(errores);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_meqfcgj",
        "template_6ewc6po",
        e.target,
        "95F9J_c9NXaRZUTYz"
      )
      .then((res) => {
        console.log(res),
          (error) => {
            console.log(error);
          };
      });

    messageRef.current.innerText =
      "Su mensaje fue enviado correctamente. Nos estaremos contactando con usted a la brevedad.";

    setTimeout(() => {
      messageRef.current.innerText = "";
    }, 3000);

    setInput({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact section-padding">
      <div className="bg-imagen">
        <div className="container">
          <div className="row">
            <div className="bg-form">
              <div className="col-lg-6">
                <div className="form md-mb50">
                  <h4 className="fw-700 color-font mb-50">
                    ¿Te interesa este proyecto?
                  </h4>
                  <Formik>
                    <Form
                      onSubmit={sendEmail}
                      autoComplete="off"
                      id="contact-form"
                    >
                      <div className="messages" ref={messageRef}></div>
                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            value={input.name}
                            placeholder="Nombre Completo"
                            required="required"
                            onChange={(e) => handleOnChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <Field
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => handleOnChange(e)}
                            value={input.email}
                          />
                          {errors.email ? <div>{errors.email}</div> : null}
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
                          onChange={(e) => handleOnChange(e)}
                          value={input.message}
                        />
                      </div>

                      <button type="submit" className="butn bord">
                        <span>Enviar Mensaje</span>
                      </button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div /* className= "bg-imagen"*/> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSlid;
