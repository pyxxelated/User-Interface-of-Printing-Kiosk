import React from 'react'
import './Select.css'
import video from '../images/pupviid.mp4'
import logo from '../images/pup.png'
import { Link, useNavigate } from 'react-router-dom'
// import firebase from "./firebase";

function Select() {
const navigate = useNavigate();



  return (
    <div className='select-container'>
        <video src={video} autoPlay loop muted />
          <div className='c-screen'>
            <div className='up-body'>

              {/* --- Header --- */}
              <div className='header'>
                <div className='logo'>
                  <img src={logo} alt="pup logo" onClick={()=>navigate('/')}/>
                </div>
                <div className='puptitle'>
                  <p> Polytechnic University of the Philippines </p>
                </div>
              </div>

              {/* --- Link --- */}
              <div className='tab-cont'>
                <Link to ="/Select"> Students </Link> |
                <Link to ="/Selectfac"> Faculty </Link>
              </div>

              {/* --- List --- */}
              <div className='list-cont'>
                <div className='table'>
                  <div className='st-files'> Student Files </div>
                  <div className='l-cont'>
                    <div className='lists' onClick={() => navigate('/Bridging')}> Accreditation form for Bridge Courses. </div>
                    <div className='lists'  > Accreditation form for Shiftee. </div>
                    <div className='lists' onClick={() => navigate('/Transferee')} > Accreditation form for Transferee. </div>
                    <div className='lists'> PUP ACE Form for Withdrawal of Subjects. </div>
                    <div className='lists'> PUP Application for Re-admission. </div>
                    <div className='lists'> PUP Health Declaration Form A. </div>
                    <div className='lists'> PUP Health Declaration Form B. </div>
                    <div className='lists'> PUP OSS Form - Application for New or Replacement of ID. </div>
                    <div className='lists'> PUP OSS SFAS Form No. 4 Scholarship Agreement. </div>
                    <div className='lists'> PUP Reference Slip Transferee or Request for Endorsements. </div>
                    <div className='lists'> Accreditation form for Bridge Courses. </div>
                    <div className='lists'> Accreditation form for Bridge Courses. </div>
                    <div className='lists'> Accreditation form for Bridge Courses. </div>
                    <div className='lists'> Accreditation form for Bridge Courses. </div>
                    <div className='lists'> Accreditation form for Bridge Courses. </div>
                    <div className='lists'> Accreditation form for Bridge Courses. </div>
                    <div className='lists'> Accreditation form for Bridge Courses. </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

    </div>
  )
}

export default Select
