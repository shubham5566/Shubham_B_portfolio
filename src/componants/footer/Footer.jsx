import React from 'react'
import './footer.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const Footer = () => {
  const AllIcons = [
    {
      name:"Github",
      icon:<FaGithubSquare/>,
      link:"https://github.com/shubham5566"
  },
    {
      name:"Twiter",
      icon:<FaSquareXTwitter/>,
      link:"https://twitter.com/i/flow/login"
  },
    {
      name:"Linkdin",
      icon:<CiLinkedin/>,
      link:"https://www.linkedin.com/in/shubham-bhavsar-2b3241183/"
  }

    
  ]
  return (
    <footer id='footer'>
     
      <a href="#" className='footer_logo'>SHUBZZ</a>
      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experiance</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">portfolio</a></li>
        {/* <li><a href="#">testmonial</a></li> */}
        <li><a href="#">Contact</a></li>
       
      </ul>
      <div className="footer_socials">
     {
      AllIcons.map((item)=>{
        return (
          <OverlayTrigger
          key={item.name}
          placement={"top"}
          overlay={
            <Tooltip id="tooltip-1">
              <strong>{item.name}</strong>.
            </Tooltip>
          }
        >
          <a href={item.link} target="_blank" className="items">
            {item.icon}
          </a>
        </OverlayTrigger>
        )
      })
     }
      </div>
      <div className="footer_copyright">
        <small>&copy; Shubham Bhavsar</small>
      </div>

    </footer>
  )
}

export default Footer