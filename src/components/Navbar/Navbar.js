import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import Logo from '../../assets/images/logo/CodeDragi.png';
import Follow from '../Follow/Follow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPalette,faBook,faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <>
        {/* Menu Desktop */}
        <header className={styles.headerDesktop}>
            <NavLink to='/'><img src={Logo}/></NavLink>

            <nav>
                <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.link} to='/'>Accueil</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.link} to='projects'>Projets</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.link} to='cv'>CV</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.activeLink : styles.link} to='contact'>Contact</NavLink>
            </nav>
            <Follow/>
        </header>

        {/* Menu Mobile */}
        <NavLink to='/'><img src={Logo} className={styles.headerMobileImg}/></NavLink>
        <header className={styles.headerMobile}>
            

            <nav>
                
                <NavLink className={styles.items} to='/'>
                    <FontAwesomeIcon icon={faHouse} size="xl" />
                </NavLink>
            
                <NavLink className={styles.items} to='projects'>
                    <FontAwesomeIcon icon={faPalette} size="xl"/>
                </NavLink>

                <NavLink className={styles.items} to='cv'>
                    <FontAwesomeIcon icon={faBook} size="xl"/>
                </NavLink>

                <NavLink className={styles.items} to='contact'>
                    <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                </NavLink>
                
               
                
            </nav>

            {/* <Follow/> */}
        </header>
        </>
    )
}