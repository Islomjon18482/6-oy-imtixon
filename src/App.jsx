import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import About from './Components/About'
import Form from './Components/Form'
import Cart from './Components/Cart'
import MoreCard from './Components/MoreCard'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'

export const CardInfo = React.createContext(null)

function App() {
  const [info, setInfo] = useState([])
  const [mode, setMode] = useLocalStorageState(true)
  useEffect(()=>{
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
    .then(res => res.json())
    .then(data => {
      setInfo(data.data)
    })
    .catch(err => console.log(err))
  }, [])


  return (
    <div className="mode" data-theme={mode ? "light" : "dark"}>
    <CardInfo.Provider value={info}>
    <BrowserRouter>
      <Header mode={mode} change={setMode}></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}/> 
        <Route path='/about' element={<About></About>}/> 
        <Route path='/product' element={<Form></Form>}/> 
        <Route path='/cart' element={<Cart></Cart>}/> 
        <Route path='/more' element={<MoreCard></MoreCard>}/> 
      </Routes>
    </BrowserRouter>
    </CardInfo.Provider>
    </div>
  )
}

export default App
