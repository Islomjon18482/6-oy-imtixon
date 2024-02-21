import React from "react";
import styles from "./index.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Header(props) {
  const [leng, setLeng] = useState("");
  const { t, i18n } = useTranslation();

  const cardNum = useSelector(state => state.cards)
  

  let sumNum = 0
  cardNum.forEach(element => {
    sumNum += element.num
  });


  useEffect(() => {
    if (localStorage.getItem("leng")) {
      let ln = localStorage.getItem("leng");
      i18n.changeLanguage(ln);
      setLeng(ln);
    }
  }, []);

  function lengChange(e) {
    setLeng(e.target.value);
    localStorage.setItem("leng", e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  function changeMode() {
    if (props.mode) {
      props.change(false);
    } else {
      props.change(true);
    }
  }

  return (
    <div className="container">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src="/logo.svg" />
          </div>
          <div className={styles.nav__bar}>
            <ul>
              <li>
                <NavLink to="/">
                  <button>{t("home")}</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <button>{t("about")}</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/product">
                  <button>{t("productpage")}</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <button>{t("cart")}</button>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.actions}>
            <div onClick={changeMode} className={styles.mode}>
              <img
                style={{
                  filter: props.mode ? "brightness(0)" : "brightness(150)",
                }}
                src="/moon.svg"
              />
            </div>
            <Link to="/cart">
            <div className={styles.basket}>
                <img src="/cart.svg" />
                <p>{cardNum.length}</p>
            </div>
            </Link>
            <div className={styles.leng}>
              <select
                value={leng}
                onChange={lengChange}
                className={styles.select}
              >
                <option value="en">En</option>
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
