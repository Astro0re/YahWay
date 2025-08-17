import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import store from './components/Strore'

function App() {

  return (
    <>
      <Header/>
     <img src={reactLogo}></img>
    </>
  )
}

export default App
