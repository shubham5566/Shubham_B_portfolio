import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/Shubham02-removebg-preview.png'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
    
      <div className="container header_container">
        <h5>Hello i am</h5>
        <h1>Shubham Bhavsar</h1>
        <h5 className='text-light'>Fullstack devoloper </h5>
        <CTA/>
        <HeaderSocial/>
        <div className='me'>
        <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scrool_down'>Scrool Down</a>
        

        
      </div>


    </header>
  )
}

export default Header