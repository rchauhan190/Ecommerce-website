import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <hr/>
        <p>Subscribe to our news letter and get offers on email</p>
        <br/>
        <div>
            <input type='email' placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
