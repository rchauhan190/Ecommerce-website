import React from 'react'
import './Footer.css'
import footer_logo from '../assests/logo_big.png'
import instagrm_icon from '../assests/instagram_icon.png'
import pintester_icon from '../assests/pintester_icon.png'
import whatsapp_icon from '../assests/whatsapp_icon.png'


export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=''/>
            <p>Let's Shop</p>
        </div>
        <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact us</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagrm_icon} alt=''/>
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt=''/>
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>

            
       
    </div>
  )
} 