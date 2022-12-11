import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import codepen from "../assets/common/codepen.svg";
import logo from "../assets/common/logo.svg";
import tel from "../assets/common/tel.svg";
import mail from "../assets/common/mail.svg";
import fb from "../assets/common/fb.svg";
import linkedin from "../assets/common/linkedin.svg";
import github from "../assets/common/github.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="l-footer">
          <div className="l-footer__scroll">
            <NavHashLink smooth to="#" className="l-footer__scroll__anchor">
              TOP
            </NavHashLink>
          </div>
          <div className="l-footer__codepen">
            <a href="https://codepen.io/jenelleabrigo" target="_blank" className="l-footer__codepen__icon">
              <img src={codepen} alt="codepen" />
            </a>
          </div>
          <div className="u-layout">
            <p className="l-footer__logo">
              <Link to="/" className="l-footer__logo__anchor">
                <img src={logo} alt="jldevelops-logo" />
              </Link>
            </p>
            <div className="l-footer__icon-container">
              <a href="tel:09302983017" className="l-footer__icon-container__icon">
                <img src={tel} alt="phone" />
              </a>
              <a href="/contact" className="l-footer__icon-container__icon">
                <img src={mail} alt="mail" />
              </a>
              <a href="https://web.facebook.com/jenelleloise/" target="_blank" className="l-footer__icon-container__icon">
                <img src={fb} alt="fb" />
              </a>
              <a href="https://www.linkedin.com/in/jenelleloiseabrigo/" target="_blank" className="l-footer__icon-container__icon">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/jenelleabrigo" target="_blank" className="l-footer__icon-container__icon">
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
          <p className="l-footer__copyright">© 2022 JLdevelops</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
