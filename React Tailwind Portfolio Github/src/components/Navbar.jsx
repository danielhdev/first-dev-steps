import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navM, setNavM] = useState(false);
  const handleClick = () => setNavM(!navM);

  return (
    <nav className="navcontainer">
      <div>
        <h1 className="px-4 font-bold text-2xl md:text-3xl text-slate-100 ml-3">
          danielhdev
        </h1>
      </div>

      <ul className="hidden md:flex items-center px-4 mr-3">
        <li>
          {' '}
          <a href="#home" className="navlinks">
            Home
          </a>
        </li>
        <li>
          {' '}
          <a href="#about" className="navlinks">
            About
          </a>
        </li>
        <li>
          {' '}
          <a href="#projects" className="navlinks">
            Projects
          </a>
        </li>
        <li>
          {' '}
          <a href="#contacts" className="navlinks">
            Contact
          </a>
        </li>
      </ul>

      <div
        onClick={handleClick}
        className="md:hidden z-20 flex items-center pr-3"
      >
        {!navM ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!navM ? 'hidden' : 'mNavbarVisible'}>
        <li>
          {' '}
          <a href="#home" className="navlinksm">
            Home
          </a>
        </li>
        <li>
          {' '}
          <a href="#about" className="navlinksm">
            About
          </a>
        </li>
        <li>
          {' '}
          <a href="#projects" className="navlinksm">
            Projects
          </a>
        </li>
        <li>
          {' '}
          <a href="#contacts" className="navlinksm">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
