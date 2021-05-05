import React from 'react';
import style from './Footer.module.scss';
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rfm6cqt', 'template_e4h7irb', e.target, 'user_zZUKcc5iPA1oybfhB1heV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
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
                <li className={`list-inline-item ${style.iconItem}`}><a href="https://www.facebook.com/imamhasan0007"><FontAwesomeIcon className={style.socialIcon} icon={faFacebookF} /></a></li>
                <li className={`list-inline-item ${style.iconItem}`}><a href="https://github.com/Md-Imam-Hasan"><FontAwesomeIcon className={style.socialIcon} icon={faGithub} /></a></li>
                <li className={`list-inline-item ${style.iconItem}`}><a href="https://www.linkedin.com/in/md-imam-hasan-aaba051a6/"><FontAwesomeIcon className={style.socialIcon} icon={faLinkedin} /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className='mb-4'>Let me hear from you</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" class="form-control" name='name' required placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" class="form-control" name='email' required placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <textarea class="form-control" name='message' required rows="3" placeholder='Your Message'></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button value='send' type='submit' className="btn btn-custom me-1"><FontAwesomeIcon className={style.socialIcon} icon={faPaperPlane} /> Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;