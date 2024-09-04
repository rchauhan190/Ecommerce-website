import React from 'react'
import exclusive_image from '../assests/exclusive_image.png'
import './Offers.css'

export default function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Best Selling Products</p>
            <button>Check It Now</button>

        </div>

        <div className="offers-right">
            <img src={exclusive_image} alt=''/>
        </div>
    </div>
  )
}
