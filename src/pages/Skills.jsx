import React from 'react'
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css'

const Skills = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <div className='skills-page'>
        <div ref={ref} className={`overlay-bg-skills ${inView ? 'animate' : ''}`}></div>
        <div ref={ref} className={`overlay-bg2-skills ${inView ? 'animate' : ''}`}></div>
        <div className='overlay-text-skills'>
          <div className='heading-skills'>
            Skills and Abilities
          </div> <br /> <br /> <br /> <br /> <br />
          <div className='skills-container'>
            <div className='skills'>
              Programming Languages: <br /> <br />
              <span style={{fontSize: '15px'}}> Java <br /> Python <br /> C/C++ <br /> HTML <br /> JavaScript </span>
            </div>
            <div className='skills'>
              Web-Development: <br /> <br />
              <span style={{fontSize: '15px'}}> React.js <br /> Node.js <br /> Express.js <br /> CSS </span>
            </div>
            <div className='skills'>
              Database Management: <br /> <br />
              <span style={{fontSize: '15px'}}> MongoDB <br /> PostgreSQL </span>
            </div>
            <div className='skills'> Artificial Intelligence / Machine Learning <br /> Data Structures <br /> Linux <br /> Docker, Kubernetes
            </div>
            <div className='skills'>
              Communication: <br /> <br />
              <span style={{fontSize: '15px'}}> English: Fluent <br /> Swedish: Beginner <br /> Hindi: Native </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills