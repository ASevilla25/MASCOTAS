import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            NUEVO HOGAR
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/mascotas'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mascotas
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/mision'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nosotros
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/registro'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {<Link to ='/sign-up' ><button className='btn-mobile' buttonStyle='btn--outline'>REGISTRARSE</button></Link>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
