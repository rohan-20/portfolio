import React from 'react'
import '../styles/Experience.css'
import { useInView } from 'react-intersection-observer';

const Experience = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <div className='experience-page'>
        <div className='overlay-bg-experience'></div>
        <div ref={ref} className={`overlay-text-experience ${inView ? 'animate' : ''}`}>
          <div className='heading-experience' style={{color: 'black'}}>
            Experience
          </div>
        </div>
        
        <div className='overlay-text2-experience'>
          <div className='heading-experience'>
            Industrial Training
          </div>
        </div>

        <div className='overlay-text3-experience'>
          <div className='text-experience'>
            I have done my Industrial Training at a startup called YouStart in the summer of 2021. I had the opportunity to develop a dynamic full-stack blog website, proficiently using JavaScript, CSS, Bootstrap and React framework ensuring a seamless user experience and robust functionality. Had implemented RESTful APIs using Express framework and integrated MongoDB to deliver a responsive website.
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Experience