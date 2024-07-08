import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const NavbarBooking = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className='header-item'>
      <div className='navbar'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='overview' spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu} activeClass="active-link">Overview</Link>
          </li>
          <li className='nav-item'>
            <Link to='convenient' spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu} activeClass="active-link">Convenient</Link>
          </li>
          <li className='nav-item'>
            <Link to='listRoom' spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu} activeClass="active-link">List Room</Link>
          </li>
          <li className='nav-item'>
            <Link to='comment' spy={true} smooth={true} offset={-100} duration={50} onClick={closeMenu} activeClass="active-link">Comment</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarBooking;