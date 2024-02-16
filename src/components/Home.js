import React from 'react'
import './Home.css'
import video from '../images/pupviid.mp4'
import {useNavigate} from 'react-router-dom'
import pup from '../images/pup.png'


function Home( ) {
  const navigate = useNavigate();

  return (


    <div className='home-container'>
      <video src={video} autoPlay loop muted />
        {/* --- Header --- */}
        <div className='header-container'>
            <div className='logo-container'>
              <img src={pup} alt='logo' className='img'/>
            </div>
            <div className='title'>
              <text> POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</text>
            </div>
        </div>

        {/* --- Body --- */}
        <div className='b-ctn'>
        <div className='body'>
            <h1> INK SYNC </h1>
            <div className='home-btn'>
              <button onClick = {() => navigate ("/Upload")}> Start Printing </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home
