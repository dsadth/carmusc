import React, { useEffect, useState } from "react";

import styles from "../../styles/Footer.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

const Footer = () => {
  const [userData, setUserData] = useState([]);

  const [userField, setUserField] = useState({
    name: "",
    phone: "",
    ask: "",
  });

  const changeUser = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();

    try {
      const responce = await axios.post(
        "http://localhost:3001/created",
        userField
      );
    } catch (error) {
      console.log("Error");
    }
    if (onSubmitChange) setUserField("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:3001/ask");
      setUserData(result.data);
    } catch (err) {
      console.log("wrong");
    }
  };

  return (
    <div className={styles.footer}>
      <h1 className={styles.heading}>ответим на любой вопрос</h1>

      <div className={styles.points}></div>

      <div className={styles.formblock}>
        <form action="">
          <input
            name="name"
            onChange={changeUser}
            type="text"
            placeholder="ИМЯ"
            className={styles.inputName}
            autoComplete="off"
            required
          />

          <input
            placeholder="ТЕЛЕФОН"
            className={styles.inputPhone}
            onChange={changeUser}
            name="phone"
            autoComplete="off"
            required
            type="number"
          />

          <input
            type="text"
            placeholder="Вопрос по дизайну, тюнингу и др."
            className={styles.inputAsk}
            onChange={changeUser}
            name="ask"
          />

          <button onClick={onSubmitChange} className={styles.button}>
            <h2>
              {" "}
              <span>Отправить</span>
            </h2>
          </button>
        </form>
      </div>

      <div className={styles.blockright}>
        <div className={styles.tgblock}>
          <div className={styles.tg}></div>
        </div>

        <div className={styles.wkblock}>
          <div className={styles.wk}></div>
        </div>

        <div className={styles.youtubeblock}>
          <div className={styles.youtube}></div>
        </div>
      </div>

      <div className={styles.bottomblock}>
        <div className={styles.imagepoint}></div>
        <div className={styles.imagephone}></div>
        <div className={styles.imagemessage}></div>
        <h1 className={styles.headinggps}>Anywhere World</h1>
        <h1 className={styles.headingphone}>7-999-999-99-99</h1>
        <h1 className={styles.headingemail}>aleksejfris@gmail.com</h1>
      </div>

      <div className={styles.footermenu}>
        <h1 className={styles.headingfootermenu}>
          2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae
          magna at tempus commodo.
        </h1>

        <div className={styles.footermenulist}>
          <h1 className={styles.footermenumain}>Main</h1>
          <h1 className={styles.footermenupasting}>Pasting cars</h1>
          <h1 className={styles.footermenudetail}>Detailing cars</h1>
          <h1 className={styles.footermenugallery}>Gallery</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
