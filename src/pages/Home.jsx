import React from 'react'
import logo from '../imgs/atomic-logo-2.png'
import img1 from '../imgs/arduino-car.jpg'
import img2 from '../imgs/mindstorms-car.jpg'
import img3 from '../imgs/game-console.jpg'
import img4 from '../imgs/smarthome.jpg'
import sdh from '../imgs/sdholder.jpg'
import spring from '../imgs/springgun.jpg'
import ultra from '../imgs/sensorholder.jpg'
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

const Cards2 = [
  {
    name: 'SD Card Holder',
    description: 'You can hold sd cards in this.',
    img: sdh
  },
  {
    name: 'Ultrasonic Holder',
    description: 'You can hold ultrasonic sensor in this.',
    img: ultra
  },
  {
    name: 'Spring Gun V2',
    description: 'You can shoot enemies with this.',
    img: spring
  },
]


const Home = () => {
  return (

    
            <div className='wrapper'>
              <div className='proje'>
              <p className='card-title'>Projects</p>
              {Cards.map(Card => {
                return(
                  <div className='cards'>
                  
                  <img className='card-img' src={Card.img} alt="" />

                  <div className='hp-wrapper'>
                  <h1 className='text text1'>{Card.name}</h1>
                  <p className='text text2'>{Card.description}</p>
                  </div>

                  </div>
                )
              })}
              </div>
              
              
              <div className='p3d'>
              <p className='card-title'>3D prints</p>
              {Cards2.map(Card2 => {
                return(
                  <div className='cards'>
                  
                  <img className='card2-img' src={Card2.img} alt="" />

                  <div className='hp-wrapper'>
                  <h1 className='text text1'>{Card2.name}</h1>
                  <p className='text text2'>{Card2.description}</p>
                  </div>

                  </div>
                )
              })}
              </div>
              
            </div>
             
    
  )
}

export default Home