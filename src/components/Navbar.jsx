import React from 'react'
import { Toggle } from './Toggle'
import useLocalStorage from 'use-local-storage';
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from '../imgs/atomic-logo-2.png'
import bars from '../../src/imgs/bars.svg'




export const Navbar = () => {
    const [isDark, setIsDark] = useLocalStorage('isDark', false)
    return (
    <>
    <div>
<header>
  <div className='nav-wrapper'>
        <div className='img-wrapper'>
        <img className='logo' src={logo} alt="" />
        <p className='logo-p'>Atomic <span className='logo-span'>Hobbies</span></p>
        </div>
        <div className='header-li'>
        

          <Link to='/Atomic-Hobbies-Page'><p className='li-items'>Home</p></Link>
          <Link to='/about'><p className='li-items'>About</p></Link>
          <Link to='/contact'><p className='li-items'>Contact</p></Link>
          <Link to='/shop'><p className='li-items'>Shop</p></Link>
          <div className='bar'>
            <div className='bar-line'></div>
            <div className='bar-line'></div>
            <div className='bar-line'></div>
          </div>

      

        </div>
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