import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "../../styles/Belly.module.css";

export default function BellySwiper() {
  return (
    <div className={styled.swiper}>
      <Swiper
        slidesPerView={10}
        centeredSlides={true}
        spaceBetween={50}
        navigation={true}
        className={styled.mySwiper}
      >
        <SwiperSlide>
          <div className={styled.imageone}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styled.imagetwo}></div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className={styled.imagethree}></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}