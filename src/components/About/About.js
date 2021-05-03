import React from 'react';
import dp from '../../images/IMG_20190709_035625.jpg';
import style from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className={style.about} id="about">
      <div className="container">
        <div className="text-center">
          <h1>About Me</h1>
        </div>
        <div className="mt-3 row">
          <div className="col-lg-5 col-12 my-4">
            <div className="d-flex justify-content-center align-items-center">
              <div className={style.dp}>
                <img src={dp} className='img-fluid' alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 my-4">
            <div className={style.aboutMe}>
              <p>I am a <b>Web Developer</b> having a solid understanding of front-end technology mainly focused on React.</p>
              <p>Now let’s talk about how I choose web development as my career. In the early year of my graduation, I found interest in coding. I learn DSA and start doing problem-solving on many online platforms. As a beginner, I was trying various programming languages like C, C++, Java, Python, JavaScript, and a couple of technology. After 3 years in 2019, I became a moderator of my departmental programming club called Euclid Programming Club. I helped many of my university juniors to learn to code. It was really fun and actually helping others is the best way of learning. One day, a friend of mine came to show me a problem with his website project that he was working on. It was PHP and I have no idea about PHP. Then I was thinking that as I know JavaScript and it is used to build websites so let try it out. I start learning React and it was quite fun and easy.</p>
              <p>I am a motivated person but I love to hear from people who motivated others. I love to talk about technology and try to learn more. I believe <b>learning means living</b>. </p>
              <a href="https://drive.google.com/uc?export=download&id=17OsfDoKQ3FPpPY1XknhOqY6DcT1fXqhQ" type='button' className='btn btn-custom mt-3' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faDownload} /> Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;