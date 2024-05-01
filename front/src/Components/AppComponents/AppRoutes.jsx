import React from "react";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import styles from "../styles/AppRoutes.module.css";
import Home from "../HomeComponents/Home";
import Pasting from "../PastingComponents/Pasting";
import Footer from "../HomeComponents/Footer/Footer";

const AppRoutes = () => {
  return (
    <div className={styles.routes}>
      <Routes>
      <Route path="/pasting" element={<Pasting />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
