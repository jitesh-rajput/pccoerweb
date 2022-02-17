import { useEffect, useState } from 'react';
import './Header.css'
import { Outlet, Link } from "react-router-dom";

const Header =()=>{
  
    let active=""
    if((window.location.href).includes('explore')){
      active="explore"
    }
    if((window.location.href).includes('home')){
      active="home"
    }
    if((window.location.href).includes('profile')){
      active="profile"
    }
    return(
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-3 ">
    <div className="container">
    <Link to="/" className="navbar-brand logo">
      PCCOER WEB
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pt-3">
        <li className="nav-item ">
          <Link to="/home"
          className={(active==="home") ? 'active px-3 mx-4 nav-link text-center nav-link':'px-3 mx-4 nav-link text-center nav-link'}
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/explore"
          className={(active==="explore") ? 'active px-3 mx-4 nav-link text-center nav-link':'px-3 mx-4 nav-link text-center nav-link'}>
            EXPLORE
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold px-3 mx-4 text-white" href="#">
            SYLLABUS
          </a>
        </li>
        <li className="nav-item">
          <Link to="/profile" 
          className={(active==="profile") ? 'active px-3 mx-4 nav-link text-center nav-link':'px-3 mx-4 nav-link text-center nav-link'}>
            PROFILE
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
    )
}

export default Header;