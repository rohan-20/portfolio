import React, {useEffect, useState} from 'react'
import '../styles/Home.css'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsOverlayVisible(true);
    },1300);

    return () => clearTimeout(delay);
  }, []);

  const handleExplore = () => {
    navigate('/explore');
  }


  return (
    <div className="welcome-container">

      <video autoPlay loop muted className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {isOverlayVisible && ( 
        <div className='overlay-text'>
          <div className='name'>R O H A N <br />S H A R M A</div>
          <p className='bio'>Software Engineer <br /> Gardener </p> <br /> <br />
          <button onClick={handleExplore} className='button'>E x p l o r e</button>
        </div>
      )}

    </div>
  )
}

export default Home