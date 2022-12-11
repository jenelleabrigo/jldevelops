import React, { useState } from "react";
import Modal from "./Modal";
import { projects } from "../data/projects.js";
import { truncate } from "../utils/truncate";

const Works = () => {
  return (
    <section className="p-index__works" id="works">
      <div className="u-layout">
        <h2 className="c-headline u-subheading u-font-serif">WORKS</h2>
        <div className="p-index__works__inner">
          {projects.map((item, index) => (
            <ProjectItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem = (item) => {
  const [toggleModal, setToggleModal] = useState(false);
  console.log(toggleModal);

  return (
    <>
      {toggleModal ? <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} item={item} /> : ""}
      <div className="p-index__works__inner__item-container" onClick={() => setToggleModal((current) => !current)}>
        <div className="p-index__works__inner__item">
          <div className="p-index__works__inner__item__img-container">
            <img src={item.mainImg} alt={item.mainImg} className="p-index__works__inner__item__img-container__img" />
          </div>
          <div className="p-index__works__inner__item__text-container">
            <p className="p-index__works__inner__item__text-container__title u-text is-big u-font-serif">{item.title}</p>
            <p className="p-index__works__inner__item__text-container__description u-text is-small">{item.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
