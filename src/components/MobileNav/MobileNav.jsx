import React from 'react';
import './MobileNav.css';

const MobileNav = ({isOpen, toggleMenu}) => {
    return(
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <img className='logo' src="../../assets/images/logo.png" alt="" />
                    <ul>
                        <li>
                            <a className="menu-item" id="#Hero">Accueil</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#Skills">Compétences</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#WorkExperience">Projets</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#Contact">Contactez-moi</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav;