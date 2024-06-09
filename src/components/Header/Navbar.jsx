import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import HeaderTop from "./Header-top"
const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "600px" });
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";
    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Destinations"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
           Destinations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/TripsType"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Trips Type
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ContactUs"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className={`${linkClassName} ${buttonClassName}`}
            onClick={closeMobileMenu}
          >
            Get Started
          </NavLink>
        </li>
      </ul>
    );
  };
  return (
    <header className="header">
      <HeaderTop/>
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
        Zaph Tours.com
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}
        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};
export default NavbarHook;