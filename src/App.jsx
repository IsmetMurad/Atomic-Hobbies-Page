import React from 'react'
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import { Toggle } from './components/Toggle';
import Navbar from './components/Navbar';
export const App = () => {
  const [isDark, setIsDark] = useLocalStorage('isDark', false)
  return (

    


    
    <div className='App' data-theme = {isDark ? 'dark' : 'light'}>
      <Navbar/>


      <h1 className='title'>Hello world !</h1>
      <div className='box'><h2>This is a box </h2></div>

  
    </div>

  )
}

export default App