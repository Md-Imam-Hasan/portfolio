import React from 'react';
import dp from '../../images/IMG_20190709_035625.jpg';
import style from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className={style.about}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className={style.dp}>
              <img src={dp} className='img-fluid' alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className={style.aboutMe}>
              <h1>About Me</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio, commodi non voluptate atque beatae, repellat corporis facere fugiat ut repudiandae. Inventore fuga animi et velit laborum facilis enim aut soluta libero dolorum, minus cupiditate possimus molestiae facere harum ipsam quia corporis doloribus recusandae nam saepe. Eum mollitia cumque tempore magnam quidem exercitationem, officia autem, quae nostrum aperiam distinctio vel. Dolorum mollitia repellat possimus nobis corrupti modi? Asperiores odit, ut temporibus ab ducimus nemo? Reiciendis, at aut ut voluptatibus aperiam illo, ducimus dignissimos voluptatem cul</p>
              <a href="https://drive.google.com/uc?export=download&id=17OsfDoKQ3FPpPY1XknhOqY6DcT1fXqhQ" type='button' className='btn btn-outline-info mt-3' rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faDownload} /> Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;