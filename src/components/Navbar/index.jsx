import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import AuthNav from '../Auth-nav'
import '../../style/Navbar.scss'
import { FaBars, FaRegWindowClose } from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState('')
  const handleClick = () => setClick(!click)

  return (
    <nav className="container">
      <ul className="menu">
        <li className="logo">Maryse & Sébastien</li>
        <li className={click ? 'item active' : 'item'}>
          <Link className="link" to="/" onClick={click ? handleClick : null}>
            Accueil
          </Link>
        </li>
        <li className={click ? 'item active' : 'item'}>
          <Link
            className="link"
            to="/Loadphoto"
            onClick={click ? handleClick : null}
          >
            Photos
          </Link>
        </li>
        <li className={click ? 'item active' : 'item'}>
          <AuthNav />
        </li>
        <li className="toggle" onClick={handleClick}>
          {click ? <FaRegWindowClose size="1.5em" /> : <FaBars size="1.5em" />}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
