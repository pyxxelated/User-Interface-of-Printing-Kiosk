import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Upload.css'
import video from '../images/pupviid.mp4'
import sfiles from '../images/sel-files.png'
import ufiles from '../images/up-files.png'


function Upload() {
const navigate = useNavigate();

  return (
    <div className='upload-container'>
        <video src={video} autoPlay loop muted />

        {/* --- Upload Body --- */}
        <div className='center-screen'>
          <div className='up-body'>
            <div className='s-f-section'>
              <div className='s-f-body'>
                <img src={sfiles} alt="select files" className='s-files' onClick = {() => navigate ("/Select")}/>
                  <div className='s-f-text'>
                    <p className='sel-text'> SELECT FILES </p>
                    <p className='sel-par'> You can choose any documents or files that can be seen on this section. </p>
                  </div>
              </div>
            </div>
            <div className='section'/>
            <div className='u-f-section'>
              <div className='u-f-body'>
                <img src={ufiles} alt="upload files files" className='u-files' onClick = {() => navigate ("/Upsec")}/>
                  <div className='u-f-text'>
                    <p className='up-text'> UPLOAD FILES </p>
                    <p className='up-par'> You can choose any documents or files that can be seen on this section. </p>
                  </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Upload
