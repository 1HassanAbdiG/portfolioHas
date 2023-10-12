

import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'; // Pour la gestion de la navigation
import styles from "./project.module.css"; // Assurez-vous que le chemin du fichier CSS est correct

import myPhoto from "../imges/R.jpeg";
import survey from "../imges/web.jpg";
import desktop from "../imges/photoInfor.jpg";
import tic from "../imges/ticta.jpeg";
import moblie from "../imges/developpement-mobile.jpg";
import resto from "../imges/resto.jpg";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



export default function Project() {
  return (

    <div className={styles.container}>
      <h1>My Projects</h1>

      <section className={styles.projectpage} >
        <div className={styles.projectimage}>
          <img src={survey} alt="Project" />
        </div>
        <div className={styles.projectdescription}>
          <h2 id="WebProject">Web Project</h2>
          <div className={styles.projectInfo}>
            <p className={styles.openingStatement}>
              I had the opportunity to work on several exciting web projects, each highlighting different technical skills and frameworks.
            </p>
            <div className={styles.tools}>
              <div className={styles.toolItem}>HTML</div>
              <div className={styles.toolItem}>React</div>
              <div className={styles.toolItem}>Others</div>
            </div>
            <p className={styles.projectImpact}>
              Each project had its own unique challenges, specific goals, and tailored technological solutions, thereby contributing to expanding my experience and understanding of web development.
            </p>
          </div>
          <Link to="/web" className={styles.button}>
            Learn More&nbsp;
          </Link>
        </div>
      </section>


      <section className={styles.projectpage} >
        <div className={styles.projectimage}>
          <img src={desktop} alt="Project" />
        </div>
        <div className={styles.projectdescription}>
          <h2 id="DesktopProject">Desktop Project</h2>

          <div className={styles.projectInfo}>
            <p className={styles.openingStatement}>
              This project involved developing a desktop-based student management application using WPF (Windows Presentation Foundation) technology. The application's objective is to manage students belonging to different training programs.
            </p>
            <div className={styles.tools}>
              <div className={styles.toolItem}>Visual Studio</div>
              <div className={styles.toolItem}>C#</div>
              <div className={styles.toolItem}>XAML</div>
            </div>
            <p className={styles.projectImpact}>
              This experience allowed me to acquire essential skills in desktop application development with WPF. I learned how to design an attractive user interface, manage student data, implement search and sorting features, and ensure user-friendliness. Additionally, I gained an understanding of the importance of providing an efficient solution for student management in a diverse training environment.
            </p>
          </div>

          <Link to="/destop" className={styles.button}>
            Learn More&nbsp;
          </Link>
        </div>

      </section>


      <section className={styles.projectpage} >
        <div className={styles.projectimage}>
          <img src={myPhoto} alt="Project" />
        </div>
        <div className={styles.projectdescription}>
          <h2 id="MelanomaDetection">Melanoma Detection </h2>

          <div className={styles.projectInfo}>
            <p className={styles.openingStatement}>
              I worked on a Melanoma Detection project using Artificial Intelligence (AI) to identify skin cancer from images of moles and skin lesions.
            </p>
            <div className={styles.tools}>
              <div className={styles.toolItem}>Machine Learning</div>
              <div className={styles.toolItem}>Python</div>
              <div className={styles.toolItem}>Deep Learning</div>
            </div>
            <p className={styles.projectImpact}>
              This project provided hands-on experience in medical image analysis and AI. It involved developing AI models to analyze skin images, detect melanoma, and support early cancer diagnosis, highlighting the potential of AI in healthcare.
            </p>
          </div>


          <a href="https://melanome.netlify.app/" className={styles.button}> Learn More&nbsp;</a>


        </div>

      </section >
      <section className={styles.projectpage} >

        <div className={styles.projectimage}>
          <img src={moblie} alt="Project" />
        </div>

        <div className={styles.projectdescription}>
          <h2  >IOS and Android</h2>


          <div className={styles.projectInfo}>
            <p className={styles.openingStatement}>
              I worked on exciting mobile app development projects for both iOS and Android platforms.
            </p>
            <div className={styles.tools}>
              <div className={styles.toolItem}>Swift</div>
              <div className={styles.toolItem}>Xcode</div>
              <div className={styles.toolItem}>Java</div>

            </div>
            <p className={styles.projectImpact}>
              These experiences provided hands-on learning in mobile app and game development, including UI/UX design, user interaction, and performance optimization. I also gained insights into the importance of delivering seamless and enjoyable user experiences, regardless of the platform.
            </p>
          </div>


          <Link to="/mobile" className={styles.button}>
            Learn More&nbsp;
          </Link>
        </div>

      </section>
      <section className={styles.projectpage}>
        <div className={styles.projectimage}>
          <img src={resto} alt="Project" />
        </div>
        <div className={styles.projectdescription}>
          <h2 id="RestaurantOmega">Restaurant Omega</h2> {/* Changement du nom du projet */}
          <div className={styles.projectInfo}>
            <p className={styles.openingStatement}>
              I worked on the Restaurant Omega project using Next.js and SQLite to create an online restaurant platform.
            </p>
            <div className={styles.tools}>
              <div className={styles.toolItem}>Next.js</div> {/* Modification des outils utilisés */}
              <div className={styles.toolItem}>SQLite</div>
            </div>
            <p className={styles.projectImpact}>
              This project provided hands-on experience in web development and database integration. It involved building a user-friendly restaurant website, managing orders, and showcasing the potential of Next.js and SQLite for web applications.
            </p>
          </div>
          <a href="https://restoomega.netlify.app/" className={styles.button}>Learn More&nbsp;</a>
        </div>
      </section>
      <section className={styles.projectpage}>
      <div className={styles.projectimage}>
        <img src={tic} alt="Project" />
      </div>
      <div className={styles.projectdescription}>
        <h2 id="TicTacToeProject">Tic-Tac-Toe Project</h2>

        <div className={styles.projectInfo}>
          <p className={styles.openingStatement}>
            This project involved developing a web-based Tic-Tac-Toe game using React. The objective of the application is to provide a fun and interactive way to play the classic game of Tic-Tac-Toe with friends.
          </p>
          <div className={styles.tools}>
            <div className={styles.toolItem}>React</div>
            <div className={styles.toolItem}>JavaScript</div>
            <div className={styles.toolItem}>CSS</div>
          </div>
          <p className={styles.projectImpact}>
            This experience allowed me to gain practical experience in building interactive web applications with React. I learned how to manage game state, implement game logic, and create an engaging user interface. Additionally, I gained insights into the importance of user experience and user-friendly design in game development.
          </p>
        </div>

        <Link to="/tictactoe" className={styles.button}>
          Learn More&nbsp;
        </Link>
        <a href="https://tictactoeh.netlify.app/" className={styles.button}> Learn More&nbsp;</a>
        
      </div>
    </section>





    </div>


  );
}

