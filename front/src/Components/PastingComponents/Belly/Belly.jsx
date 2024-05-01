import React from "react";

import styles from "../../styles/BellyPasting.module.css";

import { list } from "./BellyList";

const BellyPasting = () => {
  const list = [
    { id: 1, textOne: "АВТО/МАТЕРИАЛ" },
    { id: 2, textTwo: "ПЛЕНКА Spectroll" },
    { id: 3, textThree: "ПЛЕНКА Hexis" },
    { id: 4, textFour: "ПЛЕНКА SunTek" },
    { id: 5, textFive: "ПЛЕНКА LLumar" },

    { id: 6, textClass: "1 Класс (MINI COOPER, FIAT 500)" },
    { id: 7, priceOne: "53 000" },
    { id: 8, priceTwo: "64 000" },
    { id: 9, priceThree: "69 000" },
    { id: 10, priceFour: "72 000" },
  ];

  const res = list.map(function (item) {
    return (
      <div>
        <div className={styles.topblock}>
          <p className={styles.itemo} key={item.id}>
            <span className={styles.textOne}>{item.textOne}</span>
          </p>

          <p className={styles.itemt} key={item.id}>
            <span className={styles.textTwo}>{item.textTwo}</span>
          </p>

          <p className={styles.itemth} key={item.id}>
            <span className={styles.textThree}>{item.textThree}</span>
          </p>

          <p className={styles.itemf} key={item.id}>
            <span className={styles.textFour}>{item.textFour}</span>
          </p>

          <p className={styles.itemfi} key={item.id}>
            <span className={styles.textFive}>{item.textFive}</span>
          </p>
        </div>
      </div>
    );
  });

  const priceone = list.map(function (item) {
    return (
      <div className={styles.blocktwo}>
        <h1 className={styles.textClass}>
          1 КЛАСС <br /> (MINI COOPER, FIAT 500)
        </h1>

        <h1 className={styles.priceOne}>{item.priceOne}</h1>

        <h1 className={styles.priceTwo}>{item.priceTwo}</h1>

        <h1 className={styles.priceThree}>{item.priceThree}</h1>

        <h1 className={styles.priceFour}>{item.priceFour}</h1>
      </div>
    );
  });

  const pricetwo = list.map(function (item) {
    return (
      <div className={styles.blockthree}>
        <h1 className={styles.textClass}>
          2 КЛАСС <br /> (BMW 3, MERCEDES)
        </h1>

        <h1 className={styles.priceOne}>{item.priceOne}</h1>

        <h1 className={styles.priceTwo}>{item.priceTwo}</h1>

        <h1 className={styles.priceThree}>{item.priceThree}</h1>

        <h1 className={styles.priceFour}>{item.priceFour}</h1>
      </div>
    );
  });

  const pricethree = list.map(function (item) {
    return (
      <div className={styles.blockfour}>
        <h1 className={styles.textClass}>
          4 КЛАСС <br /> (BMW 3, MERCEDES)
        </h1>

        <h1 className={styles.priceOne}>{item.priceOne}</h1>

        <h1 className={styles.priceTwo}>{item.priceTwo}</h1>

        <h1 className={styles.priceThree}>{item.priceThree}</h1>

        <h1 className={styles.priceFour}>{item.priceFour}</h1>
      </div>
    );
  });

  const pricefour = list.map(function (item) {
    return (
      <div className={styles.blockfive}>
        <h1 className={styles.textClass}>
          5 КЛАСС <br /> (BMW 3, MERCEDES)
        </h1>

        <h1 className={styles.priceOne}>{item.priceOne}</h1>

        <h1 className={styles.priceTwo}>{item.priceTwo}</h1>

        <h1 className={styles.priceThree}>{item.priceThree}</h1>

        <h1 className={styles.priceFour}>{item.priceFour}</h1>
      </div>
    );
  });

  return (
    <div className={styles.BellyPasting}>
      <div> {res}</div>

      <div className={styles.borderone} />
      <div>{priceone}</div>
      <div className={styles.bordertwo} />
      <div>{pricetwo}</div>
      <div className={styles.borderthree} />
      <div>{pricethree}</div>

      <div className={styles.borderfour} />
      <div>{pricefour}</div>
      <div className={styles.borderfive} />
      <div className={styles.bordersix} />
    </div>
  );
};

export default BellyPasting;
