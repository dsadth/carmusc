import React, { useEffect, useRef, useState } from "react";

import styles from "../../styles/Hips.module.css";
import HipsInfo from "./HipsInfo";
import HipsInfoTwo from "./HipsInfoTwo";

const Hips = () => {
  const buttonone = useRef(null);
  const buttontwo = useRef(null);

  const [color, setColor] = useState(true);
  const [detailClicked, setDetailClicked] = useState(false);

  const ClickPaste = (e) => {
    setColor(!color);
    setDetailClicked(false);
    buttonone.current.focus()
    if (setColor()) e.preventDefault();
  };

  const ClickDetail = (ee) => {
    setColor(true);
    setDetailClicked(!detailClicked);

    if (setDetailClicked(true)) ee.preventDefault();
  };

  return (
    <div className={styles.hips}>
      <h1 className={styles.heading}>OURS SERVICES</h1>

      <div className={styles.points}></div>

      <div className={styles.block}>
        {!color && <HipsInfoTwo />}

        {detailClicked && <HipsInfo />}
      </div>

      <div className={styles.buttons}>
        <div
          ref={buttonone}
          className={color ? styles.button : styles.buttonnot}
          onClick={ClickPaste}
        >
          <h2>
            <span>Pasting</span>
          </h2>
        </div>
        <div
          ref={buttontwo}
          className={!detailClicked ? styles.button : styles.buttonnot}
          onClick={ClickDetail}
        >
          <h2>
            <span>Detail</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hips;
