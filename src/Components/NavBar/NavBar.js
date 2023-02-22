import React from 'react'
import './NavBar.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/theneoteric.png'

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <Link className='logo' to='/'>
        <img src={Logo} alt='logo' />
      </Link>
    </div>
  )
}

export default NavBar