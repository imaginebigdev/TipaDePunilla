import React from "react";
import LightTheme from "../../layouts/Light";
import BlogDetails from "../../components/Blog-details/dogo-details";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import appData from "../../data/app.json";

const PotroPlus = () => {
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
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <NavbarArch nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="Blog Details."
        paragraph="All the most current news and events of our creative team."
      />
      <BlogDetails theme="light" blog={"blog"} />
      <Footer />
    </LightTheme>
  );
};

export default PotroPlus;
