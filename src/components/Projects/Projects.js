import React from 'react';
import project11 from '../../images/Project Image/image11.png';
import project12 from '../../images/Project Image/image12.png';
import project13 from '../../images/Project Image/image13.png';
import project21 from '../../images/Project Image/image21.png';
import project22 from '../../images/Project Image/image22.png';
import project23 from '../../images/Project Image/image23.png';
import project31 from '../../images/Project Image/image31.png';
import project32 from '../../images/Project Image/image32.png';
import project33 from '../../images/Project Image/image33.png';
import project41 from '../../images/Project Image/image41.png';
import project42 from '../../images/Project Image/image42.png';
import project43 from '../../images/Project Image/image43.png';
import style from './Projects.module.scss';
import ProjectCard from '../ProjectCard/ProjectCard';

const projects = [
  {
    id: 1,
    projectImg: [project11, project12, project13],
    projectName: "Car Shire",
    projectDetails: "A Fullstack Website of Car Repairing Service.Users can order services and check their previous order history with status(pending, ongoing or done). This website has a functional admin panel with restricted access(only admin can access) section where admin can 1. add new services, 2. delete any existing services, 3. update the state of customers order.",
    technology: ["react-native", "bootstrap", "nodejs", "mongodb", "firebase"],
    websiteLink: "https://car-shire.web.app/",
    codeLink: "https://github.com/Md-Imam-Hasan/Car-Shire-Client"
  },
  {
    id: 2,
    projectImg: [project21, project22, project23],
    projectName: "Book Bay",
    projectDetails: "A Fullstack Website of Online Books Store. Users can order books and check their previous order history. This website has a funtional admin panel section where admin can add new book for the store and also can delete any existing book.",
    technology: ["react-native", "bootstrap", "firebase", "nodejs", "mongodb"],
    websiteLink: "https://book-bay-1.web.app/",
    codeLink: "https://github.com/Md-Imam-Hasan/Book-Bay-Client"
  },
  {
    id: 3,
    projectImg: [project31, project32, project32],
    projectName: "Covid-19 Tracker",
    projectDetails: "A web app to show world wide corona statitics. Worldwide and country-wise daily and total coronavirus cases, recovered, deaths showing with heat map and chart. By selecting any country, the map will automatically zoom to that country with the required information.",
    technology: ["html-5--v1", "css3", "material-ui", "react-native"],
    websiteLink: "https://distracted-mcclintock-727281.netlify.app/",
    codeLink: "https://github.com/Md-Imam-Hasan/covid-19-tracker"
  }
]

const Projects = () => {
  return (
    <div className={style.projects} id="projects">
      <div className="container ">
        <div className="projectTitle text-center">
          <h1>My Projects</h1>
        </div>
        <div className="mt-3 row">
          {
            projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;