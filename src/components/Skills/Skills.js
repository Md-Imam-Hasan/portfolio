import React from 'react';
import style from './Skills.module.scss';
const Skills = () => {
  return (
    <div className={style.skills} id="skills">
      <div className="container ">
        <div className="skillTitle text-center">
          <h1>My Skills</h1>
          <div className="skillElement d-flex justify-content-between mt-5">
            <div>
              <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt='Html5' />
              <h6>HTML</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/css3.png" alt='CSS' />
              <h6>CSS</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/sass.png" alt='SASS' />
              <h6>SASS</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='Bootstrap' />
              <h6>Bootstrap</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/javascript.png" alt='JavaScript' />
              <h6>JavaScript</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/react-native.png" alt='React' />
              <h6>React</h6>
            </div>
            <div className={style.line}></div>
            <div>
              <img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt='Git' />
              <h6>Git</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/firebase.png" alt='Firebase' />
              <h6>Firebase</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt='Material-UI' />
              <h6>Material-UI</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/redux.png" alt='Redux' />
              <h6>Redux</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='Node' />
              <h6>Node</h6>
            </div>
            <div>
              <img src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt='Mongodb' />
              <h6>Mongodb</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;