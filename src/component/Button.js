import React from 'react'
import './Banner/banner.scss'
const Button = ({text}) => {
  return (
   
    <button className='custom-btn'>
        {text} <img src="/assets/pink-chevron-right.png" alt="" />
    </button>
  )
}

export default Button