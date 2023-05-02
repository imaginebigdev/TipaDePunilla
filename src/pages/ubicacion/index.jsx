/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import appData from "../../data/app.json";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);

  return (
    <LightTheme>
      <NavbarArch nr={navbarRef} lr={logoRef} />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13640.713811649508!2d-64.4695486!3d-31.2711587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7b4f453e5857%3A0xe99c6a0367535b62!2sTipal%20de%20Punilla!5e0!3m2!1ses!2sar!4v1682951736242!5m2!1ses!2sar"></iframe>
        </div>
        <Footer hideBGCOLOR />
      </div>
    </LightTheme>
  );
};

export default Contact;
