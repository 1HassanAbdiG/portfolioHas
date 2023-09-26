

import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'; // Pour la gestion de la navigation
import styles from "./project.module.css"; // Assurez-vous que le chemin du fichier CSS est correct

import myPhoto from "../imges/R.jpeg";
import survey from "../imges/web.jpg";
import desktop from "../imges/photoInfor.jpg";
import moblie from "../imges/developpement-mobile.jpg";

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


            <Link to="/melanomadetails" className={styles.button}>
              Learn More&nbsp;
            </Link>
          </div>

        </section >
        <section className={styles.projectpage} >

          <div className={styles.projectimage}>
            <img src={moblie} alt="Project" />
          </div>

          <div className={styles.projectdescription}>
            <h2  >IOS end endroid</h2>


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


    </div>


  );
}

