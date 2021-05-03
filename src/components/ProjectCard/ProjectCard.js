import React from 'react';
import style from './ProjectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from '../ImageSlider/ImageSlider';

const ProjectCard = (props) => {
  const { projectImg, projectName, projectDetails, technology, websiteLink, codeLink } = props.project;
  return (
    <div className="col-lg-4 my-4">
      <div className={`card ${style.projectCard}`}>
        <ImageSlider projectImg={projectImg}></ImageSlider>
        <div className="card-body text-center mt-3">
          <h3 className='mb-3'>{projectName}</h3>
          <p>{projectDetails}</p>
          <div className="technology d-flex justify-content-between mt-4">
            {
              technology.map(icon => (
                <img src={`https://img.icons8.com/color/32/000000/${icon}.png`} alt={icon} />
              ))
            }
          </div>
        </div>
        <div className="d-flex justify-content-around my-4">
          <a href={websiteLink} type='button' className='btn btn-custom' rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGlobe} /> Website
                </a>
          <a href={codeLink} type='button' className='btn btn-custom' rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faCode} /> Code
                </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;