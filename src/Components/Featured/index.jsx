import React from 'react'
import styles from "./index.module.css"
import Card from './Card'

export default function Featured() {
  return (
    <div className="container">
    <div className={styles.wrapper}>
        <div className={styles.heading}>
            <h2>Featured Products</h2>
        </div>
        <div className={styles.cards}>
            <Card></Card>
        </div>
    </div>
    </div>
  )
}
