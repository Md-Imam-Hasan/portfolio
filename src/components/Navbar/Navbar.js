import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo';
import style from './Navbar.module.scss';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="navbar-brand" onClick={() => {
          scroll.scrollToTop();
        }}>
          <img src={logo} className={`img-fluid ${style.logo}`} alt="" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <Link smooth={true} duration={500} className="nav-link me-4" to="home">Home</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} duration={500} className="nav-link me-4" to="projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} duration={500} className="nav-link me-4" to="skills">Skills</Link>
            </li>
            {/* <li className="nav-item">
              <Link smooth={true} duration={500} className="nav-link me-4" to="blogs">Blogs</Link>
            </li> */}
            <li className="nav-item">
              <Link smooth={true} duration={500} className="nav-link me-4" to="about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} duration={500} className="nav-link" to="footer">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;