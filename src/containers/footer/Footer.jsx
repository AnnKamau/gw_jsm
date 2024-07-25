import React from 'react';
import './footer.css';
import gpt3logo from '../../assets/GW.png'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt='logo' />
          <p>AnnFaith Kamau, All Rights Reserved</p>
        </div>
          <div className='gpt3__footer-links_div'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
            <h4>Get in touch</h4>
            <p>Nakuru, Kenya</p>
            <p>0780479637</p>
            <p>0713948243</p>
            <p>3annfaith@gmail.com</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2024 Gadget World. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
