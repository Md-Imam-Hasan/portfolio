import React from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Typical from 'react-typical';

const Header = () => {
  return (
    <div className={style.header} id="home">
      <div className={style.navbar}>
        <Navbar></Navbar>
      </div>
      <div className={`text-center ${style.welcomeText}`}>
        <h2>Welcome</h2>
        <h1>I am <span>Md. Imam Hasan</span></h1>
        <h3>Hire me as <Typical
          steps={['React Developer', 1500,
            'Frontend Developer', 1500,
            'Web Developer', 1500]}
          loop={Infinity}
          wrapper="b"
        /></h3>
        <a href="https://drive.google.com/uc?export=download&id=17OsfDoKQ3FPpPY1XknhOqY6DcT1fXqhQ" type='button' className='btn btn-lg btn-custom mt-3' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faDownload} /> Resume</a>
      </div>
    </div>
  );
};

export default Header;