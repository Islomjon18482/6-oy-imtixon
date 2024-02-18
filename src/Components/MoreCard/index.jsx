import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function MoreCard() {
  const [info, setInfo] = useState([]);
  const top100Films = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "10" },
    { label: "11" },
    { label: "12" },
    { label: "13" },
    { label: "14" },
    { label: "15" },
  ];
  const location = useLocation();
  const id = window.location.search.slice(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://strapi-store-server.onrender.com/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setInfo(data.data.attributes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    // console.log(info);
  }, [info]);
  console.log(info);
  // console.log(info);


  return (
    <>
    <div className="container">
     <div className={styles.card__wrapper}>
      <div className={styles.card__link}>
        <Link style={{ color: "#394E6A", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link
          style={{ color: "#394E6A", textDecoration: "none" }}
          to="/product"
        >
          Products
        </Link>
      </div>
      <div className={styles.main__card}>
        <div className={styles.img}>
          <img src={info.image} />
        </div>
        <div className={styles.text}>
          <h2>{info.title}</h2>
          <h3>{info.company}</h3>
          <h4>${info.price}</h4>
          <p>{info.description}</p>
          <div className={styles.inputs}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 320 }}
              renderInput={(params) => <TextField {...params} label="Amount" />}
            />
          </div>
          <button className={styles.add}>ADD TO BAG</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
