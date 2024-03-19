import React from 'react'
import './founder.scss'
const Founder = () => {
  return (
   <>
   <div className="founder-wrapper">
    <div className='container founder-container'>
        <div className="row">
            <div className='qoutes-image'>
                <img src="/assets/blue-quote-marks.svg" alt="" className='img-fluid' />
            </div>
            <div className="founder-text position-relative ">
            <p>The internet is an ever-growing platform that encompasses every part of our daily life, and blockchain is playing a huge role in transforming it.</p>
            <div className='position-absolute qaoutes-image-right'>
            <img src="/assets/blue.svg" alt="" className='img-fluid' />
            </div>
            </div>
            <div className="founder-profile">
                <img src="/assets/profile1.png" alt="" className='img-fluid' />
                <h5>Ralph Kalsi</h5>
                <p>Founder and CEO, Digiffer</p>
            </div>
        </div>
    </div>
   </div>
   
   </>
  )
}

export default Founder