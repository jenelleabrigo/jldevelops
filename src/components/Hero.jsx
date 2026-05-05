import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="p-index__carousel">
      <div className="u-pc-layout">
        <div className="p-index__carousel__text">
          <p className="p-index__carousel__text1 u-font-serif">
            Hi there!{" "}
            <span className="p-index__carousel__text1__span1">
              <br className="u-sp-only" />I am
            </span>{" "}
            <span className="p-index__carousel__text1__span2">JEN</span>.
          </p>
          <p className="p-index__carousel__text2">
            I am a web developer with an experience of <br className="u-sp-only" />
            designing and developing.
            <br /> <span></span>I create landing pages, web pages, <br className="u-sp-only" />forms, and animations
            <br />
            <span className="p-index__carousel__text2__span">WITH PASSION.</span>
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
