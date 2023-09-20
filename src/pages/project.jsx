// ProjectPage.jsx
import { React, useRef } from 'react';
import { Link } from 'react-router-dom'; // For handling navigation




import myPhoto from "../imges/R.jpeg";
import survey from "../imges/sondage-scaled.jpg"
import desktop from "../imges/photoInfor.jpg"

import styles from "./project.module.css";

const Project = () => {
  const webProjectRef = useRef(null);
  const desktopProjectRef = useRef(null);
  const melanomaDetectionRef = useRef(null);
  const iOSANDROIDRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const scrollTo = ref.current.offsetTop;
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className={styles.container}>
      <div className="entete">
        <h1>My Projects</h1>
        <div className={styles.lienMemePage}>
          <button onClick={() => scrollToSection(webProjectRef)}>Web Project</button >
          <button onClick={() => scrollToSection(desktopProjectRef)}>Desktop Project</button >
          <button onClick={() => scrollToSection(melanomaDetectionRef)}>Melanoma Detection</button >
          <button onClick={() => scrollToSection(iOSANDROIDRef)}>iOS ANDROID</button >
        </div>

      </div>


      <section className={styles.projectpage} ref={webProjectRef}>
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
          <Link to="/webproject" className={styles.button}>
            Learn More&nbsp;
          </Link>
        </div>
      </section>


      <section className={styles.projectpage} ref={desktopProjectRef}>
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

          <Link to="/desktopproject" className={styles.button}>
            Learn More&nbsp;
          </Link>
        </div>

      </section>
      

      <section className={styles.projectpage} ref={melanomaDetectionRef}>
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
      <section className={styles.projectpage} ref={iOSANDROIDRef}>

        <div className={styles.projectimage}>
          <img src={myPhoto} alt="Project" />
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


          <Link to="/melanomadetails" className={styles.button}>
            Learn More&nbsp;
          </Link>
        </div>

      </section>



    </div>
  );
};

export default Project;
