import React from 'react'
import './Upsec.css'
import video from '../images/pupviid.mp4'
import logo from '../images/pup.png'
import nfc from '../images/nfc.png'
import flash from '../images/flashdrive.png'
import bluetooth from '../images/bluetooth.png'
import { useNavigate } from 'react-router-dom'

function Upsec() {
  const navigate = useNavigate();

  return (
    <div className='upload-container'>
        <video src={video} autoPlay loop muted />

        {/* --- Upload Body --- */}
        <div className='center-screen'>
          <div className='up-body'>

               {/* --- Header --- */}
            <div className='header'>
              <div className='logo'>
                <img src={logo} alt="pup logo" onClick={()=>navigate('/Upload')}/>
              </div>
              <div className='puptitle'>
                <p> Polytechnic University of the Philippines </p>
              </div>
            </div>

              {/* --- body --- */}
              <div className='ctntitle'>
                  <p> Please select a suitable method for transferring a file. </p>
              </div>
              <div className='ctn2'>
              <img src={bluetooth} alt="bluetooth" className='bluetooth' onClick = {() => navigate ("/Bluetooth")}/>
              <div className='bluetooth-text'>
                <p> BLUETOOTH</p>
              </div>
              </div>
              <div className='divs'></div>
              <div className='ctn1'>
              <img src={nfc} alt="nfc" className='nfc' onClick = {() => navigate ("/Nfc")}/>
              <div className='nfc-text'>
              <p> NFC</p>
              </div>
              </div>
              <div className='divs'></div>
              <div className='ctn3'>
              <img src={flash} alt="flashdrive" className='flash' onClick = {() => navigate ("/Flashdrive")}/>
              <div className='flash-text'>
              <p> FLASHDRIVE</p>
              </div>
              </div>

          </div>
        </div>
    </div>
  )
}

export default Upsec
