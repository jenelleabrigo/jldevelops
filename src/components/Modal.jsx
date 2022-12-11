import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

function Modal({ toggleModal, setToggleModal, item }) {
  return (
    <div className="c-modal">
      <div className="c-modal__close" onClick={() => setToggleModal((current) => !current)}></div>
      <div className="c-modal__content">
        <div className="">
          <p className="c-modal__content__title u-text is-big is-pink u-font-serif">{item.title}</p>
          <div className="c-modal__content__techstack">
            {item.techstack?.map((item, index) => (
              <img key={index} src={item.icon} alt="" title={item.name} className="c-modal__content__techstack__logo" />
            ))}
          </div>
        </div>
        <a href={item.link} target="_blank" className="c-modal__content__link">
          Visit Website
        </a>
        <p className="c-modal__content__text">{item.content}</p>
        <div className="c-modal__content__slide">
          {/* <Splide
            options={{
              loop: true,
              gap: "1rem",
              perPage: 1,
              perMove: 1,
              height: "auto",
              autoHeight: true,
            }}
            aria-label="My Favorite Images"
          >
            {item.slides?.map((img, index) => (
              <SplideSlide key={index}>
                <img src={img} alt={item.title} />
              </SplideSlide>
            ))}
          </Splide> */}
          <Swiper
            autoHeight={true}
            spaceBetween={20}
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="swiper"
          >
            {item.slides?.map((img, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <img src={img} alt={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Modal;
