import React from 'react'
import styles from "./index.module.css"

export default function Cart() {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
        <h2>Your cart is empty</h2>
    </div>
    </div>
  )
}
