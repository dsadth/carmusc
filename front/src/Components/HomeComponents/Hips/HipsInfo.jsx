import React from "react";

import styles from "../../styles/Info.module.css";

const HipsInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles.block}>
        <div className={styles.imageplenka}></div>

        <h1 className={styles.heading}>Защитные плёнки</h1>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
          ultrices pellentesque vulputate sit. Ut feugiat.
        </p>
      </div>

      <div className={styles.blocktwo}>
        <div className={styles.imagecar}>sfaasfas</div>

        <h1 className={styles.heading}>Цветные пленки</h1>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
          ultrices pellentesque vulputate sit. Ut feugiat.
        </p>
      </div>
    </div>
  );
};

export default HipsInfo;
