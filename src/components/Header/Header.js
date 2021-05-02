import React from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className={style.header}>
      <Navbar></Navbar>
      <div className={`text-center ${style.welcomeText}`}>
        <h2>Welcome</h2>
        <h1>I am <span>Md. Imam Hasan</span></h1>
        <h3>Hire me as Frontend Developer</h3>
        <a href="https://drive.google.com/uc?export=download&id=17OsfDoKQ3FPpPY1XknhOqY6DcT1fXqhQ" type='button' className='btn btn-lg btn-outline-info mt-3' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faDownload} /> Resume</a>
      </div>
    </div>
  );
};

export default Header;