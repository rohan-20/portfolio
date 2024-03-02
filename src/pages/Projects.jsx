import React from 'react'
import '../styles/Projects.css'

const Projects = () => {
  return (
    <div>
      <div className='projects-page'>
        <div className='overlay-bg-projects'>
          <div className='text-projects'>
            Face Detection Model: <br /> Developed a high-accuracy deep face detection model using Python and Tensorflow. Applied neural network architecture to enhance accuracy and efficiency. Integrated real time video analysis improving facial recognition capabilities and ensuring seamless performance in dynamic environments.
            <br /><br /><br />
            AI Game: <br /> Implemented a neural network to train the self-learning Snake Game AI project using reinforcement learning, where an intelligent model autonomously trained to play the game, demonstrating continuous improvement. Implemented the solution using Python and Pytorch.
            <br /><br /><br />
            Image Classifier: <br /> Created a high accuracy image classifier from scratch using Python, Keras, and Tensorflow to classify puppies and babies.
          </div>
        </div>

        <div className='overlay-text-projects'>
          <div className='heading-projects'>Proj<span style={{color: 'white', fontSize: '70px', fontWeight: '300'}}>ects</span></div>
        </div>

        <div className='text-projects2'>
          Digita Book Library: <br /> Developed a MERN stack digital library app with CRUD functionality, real time weather, daily book quotes, and file uploads for wish listed book. Utilized Express.js, React.js, and MongoDB and integrated external APIs. Deployed the application with the help of Kubernetes.
          <br /><br /><br />
          AI Image Generator: <br /> Developed a React based website featuring DALL-E integration, allowing users to input prompts and dynamically generate images, fostering community engagements by enabling sharing of uniquely generated content.
          <br /><br /><br />
          Image Recognition: <br /> Integrated a high accuracy Image Classifier built by myself into a MERN app, enabling users to upload images for instant and accurate identification.
        </div>
      </div>
    </div>
  )
}

export default Projects