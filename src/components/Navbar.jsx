import React, { useRef } from 'react'
import './Navbar.css'
import shirketinLogosu from '../assets/images/logo.svg'
import {AiOutlineBars} from 'react-icons/ai'
import {GiCrossedSwords} from 'react-icons/gi'
// Button komponenti
import Button from './Button'
const Navbar = () => {

    const overlayinRefi = useRef()
    

    const openOverlayMenyu = (e)=> {
        const kliklenenElement = e.target
        if(kliklenenElement.classList.contains('bars-icon')) {
            overlayinRefi.current.classList.add('aktiv')
        }
    }

    const closeOverlayMenyu = (e) => {
        const kliklenenElement = e.target
        if(kliklenenElement.classList.contains('cross-icon')) {
            overlayinRefi.current.classList.remove('aktiv')
        }
    }


  return (
<>


    <div className="overlay" ref={overlayinRefi}>
    <GiCrossedSwords className='cross-icon' onClick={closeOverlayMenyu} />
   
    <div className="nav-links">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Services</a>
    <a href="">Blog</a>
    <a href="">Contacts</a>
    </div>
    </div>

    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={shirketinLogosu} alt="Reqemsal marketinq cehetden onemli" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <AiOutlineBars className='bars-icon' onClick={openOverlayMenyu} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>

        <li className="nav-item">
        <a className="nav-link text-white" href="#">Services</a>
      </li>

      <li className="nav-item">
      <a className="nav-link text-white" href="#">Blog</a>
    </li>

    <li className="nav-item">
    <a className="nav-link text-white" href="#">Contact</a>
  </li>
     
     
      </ul>
      <Button />
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar