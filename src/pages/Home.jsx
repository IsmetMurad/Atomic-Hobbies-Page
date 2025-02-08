import React from 'react'
import logo from '../imgs/atomic-logo-2.png'
import img1 from '../imgs/arduino-car.jpg'
import img2 from '../imgs/mindstorms-car.jpg'
import img3 from '../imgs/game-console.jpg'
import img4 from '../imgs/esp32.jpg'
import '../pages/Home.css'
import '../index.css'


const Cards = [    
{
  name: 'Arduino Robot Car',
  description: 'This car is maked by Ismet Murad. ',
  img: img1
},
{
  name: 'Arduino Game Console',
  description: 'This is ATOMBOY V2.0.',
  img: img3
},
{
  name: 'ESP32 Smart Home',
  description: 'You can control components with this.',
  img: img4
},

{
  name: 'Lego Mindstorms Shoter',
  description: 'Shoot targets and win.',
  img: img2

},


]


const Home = () => {
  return (
    
            <div>
              {Cards.map(Card => {
                return(
                  <div className='cards'>
                  
                  <img className='card-img' src={Card.img} alt="" />

                  <div className='hp-wrapper'>
                  <h1 className='text'>{Card.name}</h1>
                  <p className='text'>{Card.description}</p>
                  </div>

                  </div>
                )
              })}
              
              
            </div>
             
    
  )
}

export default Home