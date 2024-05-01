import React from "react";

import Neck from "./Neck/Neck";
import Collarbones from "./Collarbones/Collarbones";
import Belly from "./Belly/Belly";
import Hips from "./Hips/Hips";
import Knees from "./Knees/Knees";
import Shin from "./Shin/Shin";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Neck />
      <Collarbones />
      <Belly />
      <Hips />
      <Knees />
      <Shin />
      <Footer />
    </div>
  );
};

export default Home;
