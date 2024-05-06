import React from 'react'
import './about.css'
import ME from "../../assets/shubham.jpeg"
import{FaAward} from "react-icons/fa"
import{FiUsers} from "react-icons/fi"
import{AiFillFolder} from "react-icons/ai"
import { ABOUT_ME } from '../../data'
// import { Button } from 'react-bootstrap'

const About = () => {
  const PROFILE_DISCRIPTION = "I'm a dedicated web developer with 2 years and 11 months of experience crafting functional and user-friendly websites. Proficient in HTML, CSS, JavaScript, React, and Redux, I excel at turning ideas into interactive online experiences and solving complex challenges to deliver outstanding digital solutions."
  return (
    <section id='about' >
      
      <h5>Get TO Know</h5>
      <h2>{ABOUT_ME}</h2>
      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src= {ME} alt='About Image'/>
          </div>

        </div>
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward/>
            <h5>Experiance</h5>
            <small>3+ years Working </small>
          </article>
          <article className='about_card'>
            <FiUsers/>
            <h5>Client</h5>
            <small> 10+  </small>
          </article>
          <article className='about_card'>
            <AiFillFolder/>
            <h5>Projects</h5>
            <small> 30+ completed </small>
          </article>
        </div>
          <p>{PROFILE_DISCRIPTION}</p>
           {/* <Button variant="primary">button</Button> */}
           <a href='#contact' className='btn btn-primary'>Lets Talk</a>


      </div>
      
      </div>
      </section>
  )
}

export default About