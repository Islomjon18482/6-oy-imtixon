import React from "react";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const [leng, setLeng] = useState("en");

  function lengChange(e){
    setLeng(e.target.value)
  }

  function changeMode(){
    if(props.mode){
      props.change(false)
    }else{
      props.change(true)
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
                <button>Home</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <button>About</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/product">
                <button>Products</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <button>Cart</button>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.actions}>
          <div onClick={changeMode} className={styles.mode}>
            <img style={{ filter: props.mode ? "brightness(0)" : "brightness(150)"}} src="/moon.svg" />
          </div>
          <div className={styles.leng}>
              <select value={leng} onChange={lengChange} className={styles.select}>
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
