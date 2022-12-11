import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import logo from "../assets/common/logo.svg";
import tel from "../assets/common/tel.svg";
import mail from "../assets/common/mail.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="l-header">
        <div className="l-header__inner">
          <h1 className="l-header__logo">
            <NavHashLink smooth to="/#">
              <img src={logo} alt="" />
            </NavHashLink>
          </h1>

          <nav className="l-nav">
            <a href="tel:09302983017" className="l-nav__content__contact u-sp-only">
              <img src={tel} alt="phone" />
            </a>
            <NavLink to="/contact" className="l-nav__content__contact u-sp-only">
              <img src={mail} alt="mail" />
            </NavLink>

            <p className={`u-sp-only l-nav__trigger ${toggle ? "is-show-nav" : ""}`} onClick={() => setToggle((prev) => !prev)}>
              <button className="l-nav__trigger__button">
                <span className="l-nav__trigger__line"></span>
                <span className="l-nav__trigger__line"></span>
                <span className="l-nav__trigger__line"></span>
              </button>
            </p>

            <div className="">
              <ul className="l-nav__content u-pc-only">
                <li className="l-nav__content__menu">
                  <HashLink smooth to="/#" className={`l-nav__content__menu__anchor u-font-serif ${location.pathname == "/" && location.hash == "" ? "active" : ""}`}>
                    Home
                  </HashLink>
                </li>
                <li className="l-nav__content__menu">
                  <HashLink smooth to="/#works" className={`l-nav__content__menu__anchor u-font-serif ${location.hash == "#works" ? "active" : ""}`}>
                    Works
                  </HashLink>
                </li>
                <li className="l-nav__content__menu">
                  <HashLink smooth to="/#journey" className={`l-nav__content__menu__anchor u-font-serif ${location.hash == "#journey" ? "active" : ""}`}>
                    Journey
                  </HashLink>
                </li>
                <li className="l-nav__content__menu">
                  <a href="/about" className="l-nav__content__menu__anchor u-font-serif">
                    About Me
                  </a>
                </li>
              </ul>
            </div>

            <a href="tel:09302983017" className="l-nav__content__contact u-pc-only">
              <img src={tel} alt="phone" />
            </a>
            <a href="/contact" className="l-nav__content__contact u-pc-only">
              <img src={mail} alt="mail" />
            </a>
          </nav>
        </div>
      </div>
      <div className={`${toggle ? "is-show-nav" : ""}`}>
        <ul className="l-nav__content u-sp-only">
          <li className="l-nav__content__menu">
            <NavHashLink smooth to="/" className="l-nav__content__menu__anchor is-home u-font-serif">
              Home
            </NavHashLink>
          </li>
          <li className="l-nav__content__menu">
            <HashLink smooth to="/#works" className="l-nav__content__menu__anchor u-font-serif">
              Works
            </HashLink>
          </li>
          <li className="l-nav__content__menu">
            <HashLink smooth to="/#journey" className="l-nav__content__menu__anchor u-font-serif">
              Journey
            </HashLink>
          </li>
          <li className="l-nav__content__menu">
            <NavLink to="/about" className="l-nav__content__menu__anchor u-font-serif">
              About Me
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
