import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';

 const App = () => {

  const [isDark, setIsDark] = useLocalStorage('isDark', false)
  return (

    


    
    <div className='App' data-theme = {isDark ? 'dark' : 'light'}>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>


      
      
      




  
    </div>

  )
}

export default App