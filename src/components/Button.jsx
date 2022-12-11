import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/contact" className="c-button is-white u-font-serif" onClick={() => window.scrollTo(0, 0)}>
      Get in touch!
    </Link>
  );
};

export default Button;
