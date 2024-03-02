import React from 'react'
import '../styles/Education.css'
import { useInView } from 'react-intersection-observer';


const Education = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  
  return (
    <div>
      <div  className='education-page'>
      <div ref={ref} className={`overlay-bg-education ${inView ? 'animate' : ''}`}></div>
        <div className='overlay-text-education'>
          <div className='heading-education'>Education</div><br /><br />
          <p className='text-education'>Master's in Software Engineering &nbsp; (2022-2024)<br />
            <span style={{fontSize: '15px'}}> I am doing my Master's in Software Engineering from Blekinge Technical University in Karlskrona, Sweden. </span>
          </p> <br />
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <br />
          <p className='text-education'>Bachelor's in Information Technology &nbsp; (2016-2020) <br />
            <span style={{fontSize: '15px'}}> I did my Bachelor's in Information Technology from Jaipur Engineering College & Reserch Centre, India. </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education