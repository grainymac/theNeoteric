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
      <nav>
        <NavLink className='nav-link' exact='true' activeclassname='active' to='/'>Home</NavLink>
        <NavLink className='nav-link' exact='true' activeclassname='active' to='/arts'>Arts</NavLink>
        <NavLink className='nav-link' exact='true' activeclassname='active' to='/science'>Science</NavLink>
        <NavLink className='nav-link' exact='true' activeclassname='active' to='/us'>Us</NavLink>
        <NavLink className='nav-link' exact='true' activeclassname='active' to='/world'>World</NavLink>
      </nav>
    </div>
  )
}

export default NavBar