import React from 'react'
import { Toggle } from './Toggle'
import useLocalStorage from 'use-local-storage';
import "./Navbar.css"




export const Navbar = () => {
    const [isDark, setIsDark] = useLocalStorage('isDark', false)
    return (
    <>
    <div className='App' data-theme = {isDark ? 'dark' : 'light'}>
<header>
        <div className='header-li'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Shop</p>
        </div>
      <Toggle 
      isChecked={isDark}
      handleChange={() => setIsDark (!isDark)}
      
      
      />
      </header>
      </div>
    </>
  )
}

export default Navbar