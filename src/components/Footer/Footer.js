import React from 'react';
import style from './Footer.module.scss';
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className={style.footer} id="footer">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6">
            <h2 className='mb-4'>I am available</h2>
            <p>Email: <span className={style.brandColor}> imamhasan0007@gmail.com</span></p>
            <p>Phone: <span className={style.brandColor}> +88017-68022896</span></p>
            <div className={style.socialMedia}>
              <ul className="list-inline">
                <li className={`list-inline-item ${style.iconItem}`}><a href="/https://www.facebook.com/imamhasan0007"><FontAwesomeIcon className={style.socialIcon} icon={faFacebookF} /></a></li>
                <li className={`list-inline-item ${style.iconItem}`}><a href="https://github.com/Md-Imam-Hasan"><FontAwesomeIcon className={style.socialIcon} icon={faGithub} /></a></li>
                <li className={`list-inline-item ${style.iconItem}`}><a href="https://www.linkedin.com/in/md-imam-hasan-aaba051a6/"><FontAwesomeIcon className={style.socialIcon} icon={faLinkedin} /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className='mb-4'>Let me hear from you</h2>
            <form>
              <div className="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your Message'></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-custom me-1"><FontAwesomeIcon className={style.socialIcon} icon={faPaperPlane} /> Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;