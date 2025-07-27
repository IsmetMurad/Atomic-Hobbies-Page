import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Contact from './pages/contact.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import { Routes, Route } from 'react-router-dom';

 const App = () => {

  const [isDark, setIsDark] = useLocalStorage('isDark', false)
  return (

    


    
    <div className='App' data-theme = {isDark ? 'dark' : 'light'}>
      
      <Navbar/>
      <Routes>
        <Route path='/Atomic-Hobbies-Page' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>


      
      
      




  
    </div>

  )
}

export default App