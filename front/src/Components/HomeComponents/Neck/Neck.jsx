import React from "react";

import styles from "../../styles/Neck.module.css";

const Neck = () => {
  const listNeck = [
    {
      id: 1,
      Heading: "наши достижения от кубка россии до чемпионатов мира",
    },

    {
      id: 2,
      Paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat.",
    },
  ];
  return (
    <div className={styles.neck}>
      <div className={styles.achivments}>
        {listNeck.map((el) => (
          <h1 className={styles.heading}>{el.Heading}</h1>
        ))}

        <div className={styles.points}></div>

        {listNeck.map((el) => (
          <p className={styles.paragraph}>{el.Paragraph}</p>
        ))}

        <div className={styles.blocks}>
          <div className={styles.oneblock}>
            <h1 className={styles.number}>#1</h1>
            <h1 className={styles.paragraphblock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui{" "}
            </h1>
          </div>

          <div className={styles.twoblock}>
            <h1 className={styles.number}>#6</h1>
            <h1 className={styles.paragraphblock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui{" "}
            </h1>
          </div>

          <div className={styles.threeblock}>
            <h1 className={styles.number}>#2</h1>
            <h1 className={styles.paragraphblock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui{" "}
            </h1>
          </div>

          <div className={styles.fourblock}>
            <h1 className={styles.number}>#1</h1>
            <h1 className={styles.paragraphblock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui{" "}
            </h1>
          </div>
        </div>

        <div className={styles.blockstwo}>
          <div className={styles.onetwoblock}>
            <h1 className={styles.number}>#4</h1>
            <h1 className={styles.paragraphblock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui{" "}
            </h1>
          </div>

          <div className={styles.twotwoblock}>
            <h1 className={styles.number}>#3</h1>
            <h1 className={styles.paragraphblock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui{" "}
            </h1>
          </div>

          <div className={styles.threetwoblock}>
            <h1 className={styles.number}>#1</h1>
            <h1 className={styles.paragraphblock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui{" "}
            </h1>
          </div>

          <div className={styles.fourtwoblock}>
            <div className={styles.cubok}></div>
            <h1 className={styles.paragraphblock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neck;
