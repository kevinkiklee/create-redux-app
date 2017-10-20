import React from 'react'
import logo from '../../assets/logo.svg'
import './index.css'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className="AppLogo" alt="logo" />
      <h1>React/Redux Boilerplate</h1>
    </div>
  )
}

export default Header
