import React from "react";

import styles from "../../styles/HeaderPasting.module.css";
import { Link } from "react-router-dom";


import Pasting from "../Pasting";
import Home from "../../HomeComponents/Home";

const HeaderPasting = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headermain}>
        <div className={styles.wrap}>
          <Link path={<Home />} to="/">
            <h1 className={styles.main}>Main</h1>
          </Link>
          <Link path={<Pasting />} to="/pasting">
            <h1 className={styles.pasting}>Pasting cars</h1>
          </Link>
          <h1 className={styles.detailing}>Detailing cars</h1>
          <h1 className={styles.gallery}>Gallery</h1>

          <div className={styles.menu}></div>

          <div className={styles.middleblock}>
            <div className={styles.logo}>ОКЛЕЙКА АВТОМОБИЛЯ ЗАЩИТНЫМИ ПЛЁНКАМИ</div>

            <div className={styles.points}></div>

            <div className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              orci urna amet penatibus.
            </div>

            <div className={styles.service}> <h2><span>Цены</span></h2></div>
            <div className={styles.button}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPasting;
