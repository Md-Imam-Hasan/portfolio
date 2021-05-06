import React from 'react';
import style from './ProjectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from '../ImageSlider/ImageSlider';

const ProjectCard = (props) => {
  const { projectImg, projectName, projectDetails, technology, websiteLink, clientCodeLink, serverCodeLink } = props.project;
  return (
    <div className="row my-3">
      <div className="col-lg-5 col-12 my-4 order-2 order-lg-1 px-4 px-lg-0">
        <div className={`${style.projectCard}`}>
          <div className="">
            <h3 className='mb-4'>{projectName}</h3>
            <p className={style.projectDetails}>{projectDetails}</p>
            <div className="technology d-flex align-items-center mt-4">
              <h5>Technology : </h5>
              {
                technology.map(icon => (
                  <img className={style.technologyIcon} src={`https://img.icons8.com/color/32/000000/${icon}.png`} alt={icon} />
                ))
              }
            </div>
          </div>
          <div className="d-flex my-4">
            <a href={websiteLink} type='button' className='btn btn-sm btn-custom me-3' rel="noreferrer" target="_blank">
              <small><FontAwesomeIcon icon={faGlobe} /> Website</small>
            </a>
            {serverCodeLink && <div>
              <a href={clientCodeLink} type='button' className='btn btn-sm btn-custom me-3' rel="noreferrer" target="_blank">
                <small><FontAwesomeIcon icon={faCode} /> Clien Side Code</small>
              </a>
              <a href={serverCodeLink} type='button' className='btn btn-sm btn-custom' rel="noreferrer" target="_blank">
                <small><FontAwesomeIcon icon={faCode} /> Server Side Code</small>
              </a>
            </div>}
            {
              !serverCodeLink && <a href={clientCodeLink} type='button' className='btn btn-sm btn-custom me-3' rel="noreferrer" target="_blank">
                <small><FontAwesomeIcon icon={faCode} /> Code</small>
              </a>
            }
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-12 p-lg-5 d-flex justify-content-center align-items-center order-1 order-lg-2">
        <div className="">
          <ImageSlider projectImg={projectImg}></ImageSlider>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;