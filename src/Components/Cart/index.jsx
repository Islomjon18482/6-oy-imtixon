import React from 'react'
import styles from "./index.module.css"
import { useTranslation } from 'react-i18next';

export default function Cart() {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
        <h2>{t("empty")}</h2>
    </div>
    </div>
  )
}
