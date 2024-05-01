import React from 'react'

import styles from "../../styles/Knees.module.css"
import KneesSwiper from './KneesSwiper'

const Knees = () => {
  return (
    <div>

<div className={styles.knees}>
      <div className={styles.leftblock}>
        <div className={styles.topblock}>
          <div className={styles.imagecar}></div>

          <div className={styles.heading}>Materials from best company</div>

          <div className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
            rutrum est, molestie proin tristique duis sed. Morbi suspendisse
            amet nisl vestibulum risus. Quis pretium
          </div>
        </div>

        <div className={styles.pointsone}></div>

        <div className={styles.middleblock}>
          <div className={styles.imageinstumental}></div>

          <div className={styles.heading}>The masters have experience</div>

          <div className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec
            elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra
            amet adipiscing orci, lectus aenean ultricies. Erat viverra eget
            blandit ornare. Molestie ipsum commodo faucibus rhoncus
          </div>
        </div>

        <div className={styles.pointstwo}></div>

        <div className={styles.footerblock}>
          <div className={styles.imagecartwo}></div>

          <div className={styles.heading}>Warranty for all types of work</div>

          <div className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            volutpat.
          </div>
        </div>
      </div>

      <div className={styles.rightblock}>
        <div className={styles.imagecarbelly}></div>
      </div>

      <div className={styles.swip}>
        <KneesSwiper />
      </div>
    </div>
    </div>
  )
}

export default Knees