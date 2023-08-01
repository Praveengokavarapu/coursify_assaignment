import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './index.css';

const Header = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
  };

  return (
    <div className="navbar ">
      <div className="navbar-logo">PostIt</div>
      <div className={`navbar-menu ${isNavbarActive ? 'active' : ''}`}>
       <Link to="/post"> <a href="/dashboards">POST JOB</a></Link>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        &#9776; {/* Hamburger icon */}
      </div>
    </div>
  );
};

export default Header;
