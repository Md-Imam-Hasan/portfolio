import React from 'react';
import logo from '../../images/logo';
import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src={logo} className={`img-fluid ${style.logo}`} alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="ms-auto navbar-nav">
            <li class="nav-item">
              <a class="nav-link me-5" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-5" href="/">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-5" href="/">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-5" href="/">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link me-5" href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;