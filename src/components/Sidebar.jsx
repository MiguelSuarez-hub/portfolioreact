import React from 'react';

import '../css/sidebar.css';
import Logo from '../assets/logo.png'

function Sidebar({theme}) {
  return (
    <>
      <nav className={`sidebar ${theme}`}>
        <ul>
          <li><a className="logo" href=""><img src={Logo} alt="logo" /><span className="sidebar__text">MS Development</span></a></li>
          <li><a href=""><i className="bx bx-home-smile bx-lg sidebar__Icon"></i><span className="sidebar__text">Home</span></a></li>
          <li><a href=""><i className="bx bxs-user-badge bx-lg sidebar__Icon"></i><span className="sidebar__text">About</span></a></li>
          <li><a href=""><i className="bx bxs-book bx-lg sidebar__Icon"></i><span className="sidebar__text">Projects</span></a></li>
          <li><a href=""><i className="bx bx-phone bx-lg sidebar__Icon"></i><span className="sidebar__text">Contact</span></a></li>		
          <li className="github"><a className="gh" href="https://github.com/MiguelSuarez-hub" target="_blank"><i className="bx bxl-github bx-lg sidebar__Icon"></i><span className="sidebar__text">Github</span></a></li>
          <li className="linkedin"><a className="ld" href="https://www.linkedin.com/in/miguel-suarez-1805/" target="_blank"><i className="bx bxl-linkedin bx-lg sidebar__Icon"></i><span className="sidebar__text">Linkedin</span></a></li>			
        </ul>
      </nav>
    </>  
  )
}

export default Sidebar