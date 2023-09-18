import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'; // Pour gérer la navigation
import myPhoto from "../imges/hassan.png";


import Pdf from "../doc/CVHassan.pdf"

import styles from "./herder.module.css"
function Header() {
    const [navActive, setNavActive] = useState(false);


    const toggleNav = () => {
        setNavActive(!navActive);
    };
    return (<>
        <header>
            <div className={styles.droite}>
                <img src={myPhoto} alt='photohassan' className={styles.imag}></img>
                <h1>My Portfolio</h1>

            </div>


            <nav className={`${styles.nav} ${navActive ? styles.active : ''} `}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><NavLink to="/" className={({ isActive }) => (isActive ? styles.actif : "black")}><span>H</span>ome</NavLink></li>
                    <li className={styles.navItem}><NavLink to="/about" className={({ isActive }) => (isActive ? styles.actif : "black")}><span>A</span>bout</NavLink></li>
                    <li className={styles.navItem}><NavLink to="/project" className={({ isActive }) => isActive ? styles.actif : ''}><span>P</span>roject</NavLink></li>
                    <li className={styles.navItem}><NavLink to="/contact" className={({ isActive }) => isActive ? styles.actif : ''}><span>C</span>ontact</NavLink></li>
                    <li><a href={Pdf} target='_blank' rel="noopener noreferrer" ><span className={styles.resume}>Resume</span></a></li>
                </ul>

            </nav>
            <button className={`${styles.navToggle} ${navActive ? styles.active : ''}`} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

        </header>


    </>
    )
}

export default Header
