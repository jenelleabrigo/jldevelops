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
            A developer that loves <br className="u-sp-only" />
            designing and developing.
            <br /> <span></span> Let me build your idea into reality for I am
            <br />
            <span className="p-index__carousel__text2__span">YOUR DREAM DEVELOPER.</span>
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
