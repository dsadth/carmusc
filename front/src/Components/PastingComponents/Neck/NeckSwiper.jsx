import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "../../styles/NeckSwiper.module.css";

const NeckSwiper = () => {
  return (

      <div className={styled.swiper}>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
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
};

export default NeckSwiper;
