import React from "react";
import styles from "./index.module.css";
import Featured from "../Featured";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Main() {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.main__text}>
            <h2>{t("mision")}</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <Link to="/product">
              <button>{t("our")}</button>
            </Link>
          </div>
          <div className={styles.slayder}>
            <img src="slide1.webp" />
            <img src="slide2.webp" />
            <img src="slide3.webp" />
            <img src="slide4.webp" />
          </div>
        </div>
        <Featured></Featured>
      </div>
    </>
  );
}
