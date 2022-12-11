import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import logo from "../assets/common/logo.svg";
import tel from "../assets/common/tel.svg";
import mail from "../assets/common/mail.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const scrollToTopLink = () => {
    setToggle((prev) => !prev);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="l-header">
        <div className="l-header__inner">
          <h1 className="l-header__logo">
            <NavHashLink smooth to="/#">
              <img src={logo} alt="" />
            </NavHashLink>
          </h1>

          <nav className={`l-nav ${toggle ? "is-show-nav" : ""}`}>
            <p className={`u-sp-only l-nav__trigger`} onClick={() => setToggle((prev) => !prev)}>
              <button className="l-nav__trigger__button">
                <span className="l-nav__trigger__line"></span>
                <span className="l-nav__trigger__line"></span>
                <span className="l-nav__trigger__line"></span>
              </button>
            </p>

            <ul className="l-nav__content">
              <li className="l-nav__content__menu">
                <HashLink
                  smooth
                  to="/#"
                  onClick={() => setToggle((prev) => !prev)}
                  className={`l-nav__content__menu__anchor u-font-serif ${location.pathname == "/" && location.hash == "" ? "active" : ""}`}
                >
                  Home
                </HashLink>
              </li>
              <li className="l-nav__content__menu">
                <HashLink smooth to="/#works" onClick={() => setToggle((prev) => !prev)} className={`l-nav__content__menu__anchor u-font-serif ${location.hash == "#works" ? "active" : ""}`}>
                  Works
                </HashLink>
              </li>
              <li className="l-nav__content__menu">
                <HashLink smooth to="/#journey" onClick={() => setToggle((prev) => !prev)} className={`l-nav__content__menu__anchor u-font-serif ${location.hash == "#journey" ? "active" : ""}`}>
                  Journey
                </HashLink>
              </li>
              <li className="l-nav__content__menu">
                <NavLink to="/about" onClick={scrollToTopLink} className="l-nav__content__menu__anchor u-font-serif">
                  About Me
                </NavLink>
              </li>
            </ul>

            <a href="tel:09302983017" className="l-nav__content__contact ">
              <img src={tel} alt="phone" />
            </a>
            <NavLink to="/contact" className="l-nav__content__contact " onClick={scrollToTopLink}>
              <img src={mail} alt="mail" />
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
