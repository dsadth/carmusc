import React from "react";

import styles from "../../styles/Shin.module.css";

const Shin = () => {
  return (
    <div className={styles.cars}>


      <h1 className={styles.heading}>Our works</h1>

      <div className={styles.points}></div>

      <div className={styles.carsblocks}>
        <div className={styles.carone}></div>
        <div className={styles.cartwo}></div>
        <div className={styles.carthree}></div>
        <div className={styles.carfour}></div>
        <div className={styles.carfive}></div>
        <div className={styles.carsix}></div>

        <div className={styles.blocktwo}>
          <div className={styles.carseven}></div>
          <div className={styles.careight}></div>
          <div className={styles.carnine}></div>
          <div className={styles.carten}></div>
          <div className={styles.careleven}></div>
          <div className={styles.cartwelve}></div>
        </div>

        <div className={styles.blockthree}>
          <div className={styles.carthirteen}></div>
          <div className={styles.carfourteen}></div>
          <div className={styles.carfiveteen}></div>
          <div className={styles.carsixteen}></div>
          <div className={styles.carseventeen}></div>
          <div className={styles.careightten}></div>
        </div>
      </div>
    </div>
  );
};

export default Shin;
