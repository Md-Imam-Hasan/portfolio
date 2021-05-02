import React from 'react';
import project1 from '../../images/image11.png';
import project2 from '../../images/image21.png';
import project3 from '../../images/image41.png';
import style from './Projects.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from '../ProjectCard/ProjectCard';

const projects = [
  {
    id: 1,
    projectImg: project1,
    projectName: "Car Shire",
    projectDetails: "A Fullstack Website of Car Repairing Service",
    technology: ["react-native", "bootstrap", "nodejs", "mongodb", "firebase"],
    websiteLink: "https://car-shire.web.app/",
    codeLink: "https://github.com/Md-Imam-Hasan/Car-Shire-Client"
  },
  {
    id: 2,
    projectImg: project2,
    projectName: "Book Bay",
    projectDetails: "A Fullstack Website of Online Books Store",
    technology: ["react-native", "bootstrap", "firebase", "nodejs", "mongodb"],
    websiteLink: "https://book-bay-1.web.app/",
    codeLink: "https://github.com/Md-Imam-Hasan/Book-Bay-Client"
  },
  {
    id: 3,
    projectImg: project3,
    projectName: "Cooking Master",
    projectDetails: "A Website of Various Food Recipes",
    technology: ["html-5--v1", "css3", "bootstrap", "javascript"],
    websiteLink: "https://md-imam-hasan.github.io/Cooking-Master/",
    codeLink: "https://github.com/Md-Imam-Hasan/Cooking-Master"
  }
]

const Projects = () => {
  return (
    <div className={style.projects} id="projects">
      <div className="container ">
        <div className="projectTitle text-center">
          <h1>My Projects</h1>
        </div>
        <div className="mt-5 row">
          {
            projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;