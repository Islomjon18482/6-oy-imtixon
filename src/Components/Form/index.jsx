import React from "react";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import All from "../Allcards";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Form() {
  const [info, setInfo] = useState([]);
  const productRef = useRef();
  const categoryRef = useRef();
  const companyRef = useRef();
  const idRef = useRef();
  const chekRef = useRef();
  const [inputValue, setInputValue] = useState(1000);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  function reset(){
    productRef.current.value = "all"
    categoryRef.current.value = "all"
    companyRef.current.value = "all"
    idRef.current.value = "z-a"
    setInputValue(1000)
  }

  function getDataApi(){
    fetch("https://strapi-store-server.onrender.com/api/products")
    .then((res) => res.json())
    .then((data) => setInfo(data.data))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
   getDataApi()
  }, []);

  async function search(e) {
    e.preventDefault();

    try {
        const response = await fetch(`https://strapi-store-server.onrender.com/api/products?search=${productRef.current.value}&category=${categoryRef.current.value}&company=${companyRef.current.value}&order=${idRef.current.value}&price=${inputValue}000`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setInfo(data.data);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    // console.log(info);
}, [info]);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.form}>
        <form>
          <div className={styles.row}>
            <label>
              <p>Search Product</p>
              <input ref={productRef} type="text" className={styles.select} />
            </label>
            <label>
              <p categoryRef>Select Category</p>
              <select ref={categoryRef} className={styles.select}>
                <option value="all">all</option>
                <option value="Tables">Tables</option>
                <option value="Chairs">Chairs</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
              </select>
            </label>
            <label>
              <p>Select Company</p>
              <select ref={companyRef} className={styles.select}>
                <option value="all">all</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="Homestead">Homestead</option>
              </select>
            </label>
            <label>
              <p>Sort By</p>
              <select ref={idRef} className={styles.select}>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </label>
          </div>
          <div className={styles.row2}>
            <div className={styles.range}>
              <div className={styles.top__text}>
                <p>Select Price</p>
                <p>${inputValue}0.00</p>
              </div>
              <Box sx={{ width: 244 }}>
                <Slider
                  onChange={(_, value) => setInputValue(value)}
                  defaultValue={1000}
                  aria-label="Default"
                  valueLabe
                  Display="on"
                  step={1}
                  value={inputValue}
                  marks={false}
                  min={0}
                  max={100}
                />
              </Box>
              <div className={styles.bottom__text}>
                <p>0</p>
                <p>Max : $1,000.00</p>
              </div>
            </div>
            <div className={styles.free}>
              <p>Free shipping</p>
              <div className={styles.check}>
                <Checkbox
                  ref={chekRef}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
            <button onClick={(e) => search(e)} className={styles.search}>
              Search
            </button>
            <button onClick={(e) => {
              e.preventDefault()
              getDataApi()
              reset()
            }} className={styles.reset}>Reset</button>
          </div>
        </form>
      </div>
      <All filter={setInfo} data={info}></All>
    </div>
    </>
  );
}
