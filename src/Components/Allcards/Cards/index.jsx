import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";


export default function Cardall(props) {
  const info = props.data;
  return (
    <div className="container">
    <Link style={{textDecoration: "none"}} to={`/more?${info.id}`}>
          <div className={styles.card}>
            <img src={info.attributes.image} alt="" />
            <h3>{info.attributes.title}</h3>
            <p>${info.attributes.price}</p>
          </div>
    </Link>
    </div>
  );
}
