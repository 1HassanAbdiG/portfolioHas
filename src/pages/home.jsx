import React from 'react'
import { Link } from 'react-router-dom'; // Pour gérer la navigation
import styles from "./home.module.css"

function Home() {
  return (
    <div className={styles.Main}>


      <h1 className={styles.divH1}>Hello, I am</h1>
      <div className={styles.div1}>Hassan Abdi Galeb.</div>
      <div className={styles.div2}>Computer Programmer &</div>
      <div className={styles.div2}>Artificial Intelligence (AI) Programmer</div>
      <p>
      I am passionate about the world of programming and artificial intelligence. 
      With a strong background in application development and in-depth knowledge of artificial intelligence, 
      I love creating innovative solutions to solve real-world problems. 
      My ability to design and implement machine learning models as well as advanced algorithms allows me to
       develop intelligent and efficient systems.
      </p>
      <Link to="/project" className={styles.detailButton}>
        View Projects &nbsp;
      </Link>



    </div>
  )
}

export default Home
