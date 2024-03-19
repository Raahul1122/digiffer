import React from 'react'
import './navbar.scss'
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    <div className="topbar-wrapper px-4 ">
        <div className="topbar-content">
            <div className="nav1">
                <ul>
                <li>
                    <a href='#/'>
                    News
                    </a>
                </li>
                <li>
                <a href='#/'>
                Careers
                    </a>
                </li>
                <li>
                <a href='#/'>
                Learning Academy(courses)
                    </a>
                    </li>
                <li className='d-flex justify-content justify-content-center align-items-center gap-2   '>
                    <img src="/assets/phone.svg" alt="" />
                    <a href='#/'>
                    1300 462 562
                    </a>
                     
                </li>
                </ul>
            </div>
        </div>
    </div>

    <div className='main-nav mt-3 px-4'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid p-0">
    <div>

  <img src="/assets/mainlogo.png" alt="" className='img-fluid logo-image'/>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <IoIosMenu style={{color:"#4E55DF",fontSize:"30px"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Consulting</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Legal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Web3.0 Development</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
       
        <button className="btn contact-btn" type="submit">CONTACT</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Navbar