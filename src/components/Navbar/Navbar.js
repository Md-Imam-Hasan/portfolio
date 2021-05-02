import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo';
import style from './Navbar.module.scss';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <div class="navbar-brand" onClick={() => {
          scroll.scrollToTop();
        }}>
          <img src={logo} className={`img-fluid ${style.logo}`} alt="" />
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="ms-auto navbar-nav">
            <li class="nav-item">
              <Link smooth={true} duration={500} class="nav-link me-5" to="home">Home</Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} duration={500} class="nav-link me-5" to="projects">Projects</Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} duration={500} class="nav-link me-5" to="skills">Skills</Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} duration={500} class="nav-link me-5" to="blogs">Blogs</Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} duration={500} class="nav-link me-5" to="about">About Me</Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} duration={500} class="nav-link" to="footer">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;