import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className="footer-container">
    <div className="quick-links"> 
      <ul>
        <h3>SUPPORT</h3>
        <li>Support</li>
        <li>Contact</li>
      </ul>

      <ul>
        <h3>ABOUT</h3>
        <li>About us</li>
        <li>FAQ</li>
      </ul>

      <ul>
        <h3>SHOP</h3>
        <li>Women</li>
        <li>Men</li>
        <li>Jewelery</li>
      </ul>

    </div>

    <div className="subscribe-form"> 
      <h2>GET UPDATES</h2>
      <p>Stay updated with our lates news, <br />
        exlusive offers, and insights!
      </p>

      <div className="subscribe-input">  
      <input type="email" placeholder="Enter your email.." className="subscribe-field" />
      <button className="subscribe-button">SUBSCRIBE</button>
      </div>
    </div>

    <div className="socials">
      <h2>CONNECT WITH US</h2>

    <div className="socials-icons">

      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-facebook-f"></i>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-tiktok"></i>
      </div>

    </div>

    </footer>

    
    </>
  )
}

export default Footer