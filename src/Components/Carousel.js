import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import CarouselCard from "./CarouselCard";

const Carousel = ({ hour }) => {
  const sliderRef = useRef();

  const Controls = ({ hour }) => {
    const swiper = useSwiper();
    console.log("HOOK SWIPER", swiper);
    useEffect(() => {
      swiper.slideTo(0, 0);
    }, [hour]);

    return <></>;
  };
  return (
    <div>
      <Swiper
        className='static'
        initialSlide={0}
        modules={Navigation}
        slidesPerView={"auto"}
        spaceBetween={10}
        allowTouchMove={true}
        ref={sliderRef}>
        <Controls data={hour} />

        {hour.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CarouselCard {...item} id={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
