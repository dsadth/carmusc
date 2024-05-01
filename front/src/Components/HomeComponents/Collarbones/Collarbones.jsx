import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import styled from "../../styles/Collarbones.module.css";

import "../../styles/Collarbones.css";
import "swiper/css";
import "swiper/css/navigation";

export default function Collarbones() {
  return (
    <div className={styled.swiper}>
      <Swiper 
   slidesPerView={3}
   centeredSlides={true}
   spaceBetween={30}
   className="mySwiper"
 >
        <SwiperSlide>
        <h1 className={styled.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.</h1>
          <div className={styled.redblock}></div>
          <div className={styled.imageone}></div>


        </SwiperSlide>

        <SwiperSlide>
        <h1 className={styled.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.</h1>
          <div className={styled.redblock}></div>
          <div className={styled.imagetwo}></div>


        </SwiperSlide>

        <SwiperSlide>
        <h1 className={styled.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.</h1>
          <div className={styled.redblock}></div>
          <div className={styled.imagethree}></div>

        </SwiperSlide>
      </Swiper>
    </div>
  );
}
