import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Services from "../../components/Services/services";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import Portfolio from "../../components/Portfolio/portfolio";
import appData from "../../data/app.json";
import Blogs4 from "../../components/blogs/Blogs4/blogs4";
import AboutUs from "../../components/About-us/about-us";
import Works from "../../components/Works/works";
import AboutUs4 from "../../components/About-us4/about-us4";
import Services8 from "../../components/Services8/services8";
import ContactSlid from "../../components/Contact-slid/contact-slid";

const Homepage2 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
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
  }, [fixedSlider, MainContent, navbarRef]);
  return (
    <LightTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ContactSlid />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <AboutUs4 />
        <Services8 />
        <Works />
        <Portfolio grid={2} filterPosition="center" />
        <Services style="3item" />
        <Blogs4 />
        <CallToAction />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Homepage2;
