import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import '../styles/Explore.css'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'

const Explore = () => {

  return (
    <div>
      <Navbar />
      <div  className='explore-page'>
      <div>
        <video autoPlay loop muted className='background-video-explore'>
          <source src='explore-background-video.mp4' type='video/mp4' />
          Your browser does not support this video tag.
        </video>
      </div>

      <div>
        <div className='overlay-text-explore'>
          <div className='name-explore'>About Me</div> <br />
          <p className='bio-explore'>
            A curious soul who loves experiencing  new things and has a genuine interest in computers and gardening, one of which led me to pursue Master's in Software Engineering while the other stayed a mere hobby. I am an honest hardworking individual who is excited to step into the professional world, with an aim to learn and work with new technologies, and to grow both professionally and as an individual.</p>
        </div>
      </div>

      <div className='overlay-contact-explore'>
        <div className='contact-explore'>Contacts and Socials</div> <br />
        <p className='contact-detail-explore'>
          <br />
          <a href='https://www.linkedin.com/in/rohan-sharma-7b8170170/' target='_blank' rel='nooperner noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} className='social-icon' />
          </a>
          <a href='https://github.com/rohan-20' target='_blank' rel='noopnere noreferrer'>
            <FontAwesomeIcon icon={faGithub} className='social-icon'/>
          </a>
          <br /> <br /> <br />
          <FontAwesomeIcon icon={faEnvelope} className='social-icon' />20rohan.sharma08@gmail.com <br /> <br /> <br />
          <FontAwesomeIcon icon={faPhone} className='social-icon' /> +46-760847970
        </p>
      </div>
      <Education />
      <br /><br /><br /><br /><br /><br /><br />
      <Skills />
      <Experience />
      <Projects />
      </div>
    </div>
  )
}

export default Explore;