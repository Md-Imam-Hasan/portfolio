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
            'Web Developer', 1500,
            'Frontend Developer', 1500]}
          loop={Infinity}
          wrapper="b"
        /></h3>
        <a href="https://drive.google.com/uc?export=download&id=17OsfDoKQ3FPpPY1XknhOqY6DcT1fXqhQ" type='button' className='btn btn-lg btn-custom mt-3' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faDownload} /> Resume</a>
        <br />
        <svg className={style.scroll} width="40" height="77" viewBox="0 0 40 77">
          <g id="scroll" transform="translate(-253 -787)">
            <g id="Rectangle_12" data-name="Rectangle 12" transform="translate(253 787)" fill="none" stroke="#fff"
              stroke-width="4">
              <rect width="40" height="77" rx="20" stroke="none" />
              <rect x="2" y="2" width="36" height="73" rx="18" fill="none" />
            </g>
            <circle className={style.circle} id="Ellipse_1" data-name="Ellipse 1" cx="11" cy="11" r="11"
              transform="translate(262 798)" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;