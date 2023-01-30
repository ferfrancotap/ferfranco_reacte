import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to="/">Inicio</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/slider">Carusel</Link>
          </li>
          
        </ul>

      </nav>
    </div>
  )
}

export default Header