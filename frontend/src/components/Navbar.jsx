import React from 'react'
import images from '../images/Images'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <img src={images.image1} alt="app logo" />
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/doctors">ALL DOCTORS</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
          <hr />
        </li>
      </ul>
      <div>
        <button>CREATE ACCOUNT</button>
      </div>
    </div>
  )
}

export default Navbar