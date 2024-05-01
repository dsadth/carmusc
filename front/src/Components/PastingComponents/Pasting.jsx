import React from 'react'

import styles from "../styles/Pasting.module.css"
import HeaderPasting from './Header/Header'
import Neck from './Neck/Neck'
import BellyPasting from './Belly/Belly'
import KneesPasting from './Knees/Knees'
import ShinPasting from './Knees/Knees'
import Footer from './Footer/Footer'

const Pasting = () => {
  return (
    <div className={styles.pasting}>

      <HeaderPasting />
      <Neck />
      <BellyPasting />
      <ShinPasting />
      <Footer />

    </div>
  )
}

export default Pasting