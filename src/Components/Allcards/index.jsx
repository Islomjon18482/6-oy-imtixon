import React from "react";
import styles from "./index.module.css";
import Cardall from "./Cards";
import { useTranslation } from 'react-i18next';

export default function All(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.cards__header}>
          <p>22 {t("product")}</p>
          <div className={styles.actions}>
            <div className={styles.top}>
              <img src="/top.svg" />
            </div>
            <div className={styles.row}>
              <img src="/row.svg" />
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          {props.data.map((el, index) => {
            return <Cardall key={index} data={el}></Cardall>;
          })}
        </div>
      </div>
    </div>
    </>
  );
}
