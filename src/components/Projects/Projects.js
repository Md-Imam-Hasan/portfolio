import React from 'react';
import project1 from '../../images/image11.png';
import project2 from '../../images/image21.png';
import project3 from '../../images/image41.png';
import style from './Projects.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
    <div className={style.projects} id="projects">
      <div className="container ">
        <div className="projectTitle text-center">
          <h1>My Projects</h1>
        </div>
        <div className="mt-5 row">
          <div className="col-md-4">
            <div className={`card ${style.projectCard}`}>
              <img src={project1} alt="" className="img-fluid" />
              <div className="card-body text-center mt-3">
                <h3 className='mb-3'>Car Shire</h3>
                <h6>A Fullstack Website of Car Repairing Service</h6>
                <div className="technology d-flex justify-content-between mt-4">
                  <img src="https://img.icons8.com/color/48/000000/react-native.png" alt='React' />
                  <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='Bootstrap' />
                  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='Node' />
                  <img src="https://img.icons8.com/color/48/000000/mongodb.png"
                    alt='Mongodb' />
                  <img src="https://img.icons8.com/color/48/000000/firebase.png" alt='Firebase' />
                </div>
              </div>
              <div className="d-flex justify-content-around my-4">
                <a href="https://car-shire.web.app/" type='button' className='btn btn-custom' rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faGlobe} /> Website
                </a>
                <a href="https://github.com/Md-Imam-Hasan/Car-Shire-Client" type='button' className='btn btn-custom' rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card ${style.projectCard}`}>
              <img src={project2} alt="" className="img-fluid" />
              <div className="card-body text-center mt-3">
                <h3 className='mb-3'>Book Bay</h3>
                <h6>A Fullstack Website of Online Books Store</h6>
                <div className="technology d-flex justify-content-between mt-4">
                  <img src="https://img.icons8.com/color/48/000000/react-native.png" alt='React' />
                  <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='Bootstrap' />
                  <img src="https://img.icons8.com/color/48/000000/firebase.png" alt='Firebase' />
                  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='Node' />
                  <img src="https://img.icons8.com/color/48/000000/mongodb.png"
                    alt='Mongodb' />
                </div>
              </div>
              <div className="d-flex justify-content-around my-4">
                <a href="https://book-bay-1.web.app/" type='button' className='btn btn-custom' rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faGlobe} /> Website
                </a>
                <a href="https://github.com/Md-Imam-Hasan/Book-Bay-Client" type='button' className='btn btn-custom' rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card ${style.projectCard}`}>
              <img src={project3} alt="" className="img-fluid" />
              <div className="card-body text-center mt-3">
                <h3 className='mb-3'>Cooking Master</h3>
                <h6>A Website of Various Food Recipes</h6>
                <div className="technology d-flex justify-content-between mt-4">
                  <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt='Html5' />
                  <img src="https://img.icons8.com/color/48/000000/css3.png" alt='CSS' />
                  <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='Bootstrap' />
                  <img src="https://img.icons8.com/color/48/000000/javascript.png" alt='JavaScript' />
                </div>
              </div>
              <div className="technology d-flex justify-content-around my-4">
                <a href="https://md-imam-hasan.github.io/Cooking-Master/" type='button' className='btn btn-custom' rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faGlobe} /> Website
                </a>
                <a href="https://github.com/Md-Imam-Hasan/Cooking-Master" type='button' className='btn btn-custom' rel="noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faCode} /> Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;