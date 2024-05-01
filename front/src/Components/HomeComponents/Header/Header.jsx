import React from "react";

import styles from "../../styles/Header.module.css";
import { Link } from "react-router-dom";
import Pasting from "../../PastingComponents/Pasting";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <h1 className={styles.main}>Main</h1>

        <Link path={<Pasting />} to="/pasting">
          <h1 className={styles.pasting}>Pasting cars</h1>
        </Link>
        <h1 className={styles.detailing}>Detailing cars</h1>
        <h1 className={styles.gallery}>Gallery</h1>

        <div className={styles.menu}></div>
      </div>

      <div className={styles.logo}>CAR MUSC</div>

      <div className={styles.points}></div>

      <div className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna
        amet penatibus.
      </div>

      <div className={styles.service}>
        <h2>
          <span>Наши услуги</span>
        </h2>
      </div>
      <div className={styles.button}></div>

      <div className={styles.connections}>
        <div className={styles.addres}>
          <h1 className={styles.heading}>Adress: </h1>

          <h1 className={styles.loremheading}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </h1>
        </div>

        <div className={styles.phone}>
          <h1 className={styles.heading}>Phone: </h1>

          <h1 className={styles.lorem}> 7-999-999-99-99 </h1>
        </div>

        <div className={styles.timework}>
          <h1 className={styles.heading}>Time work: </h1>

          <h1 className={styles.lorem}> 8 </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
