import React from "react";

import styles from "../../styles/NeckPasting.module.css";
import NeckSwiper from "./NeckSwiper";
const Neck = () => {
  const listNeck = [
    {
      id: 1,
      Heading:
        "Полиуретановая пленка единственная надежная защита автомобиля от всех внешних воздействий",
    },
    {
      id: 2,
      Paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu",
    },
  ];

  return (
    <div className={styles.NeckPasting}>
      <div className={styles.blocks}>
        <div className={styles.leftblock}>
          {listNeck.map((el) => (
            <h1 className={styles.heading}>{el.Heading}</h1>
          ))}
          <div className={styles.points}></div>
          {listNeck.map((el) => (
            <p className={styles.paragraph}>{el.Paragraph}</p>
          ))}
          <div className={styles.logos}>
            <div className={styles.topblock}>
              <div className={styles.imagelogoone}></div>
              <div className={styles.imagelogotwo}></div>
            </div>

            <div className={styles.downblock}>
              <div className={styles.imagelogothree}></div>
              <div className={styles.imagelogo}></div>
            </div>
          </div>
        </div>

        <div className={styles.rightblock}>
          <div className={styles.imagecar}></div>

          <div className={styles.swiper}>
            <NeckSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neck;
