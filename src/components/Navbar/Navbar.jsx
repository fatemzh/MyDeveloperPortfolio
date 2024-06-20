import { useState, useContext } from "react";
import './Navbar.css';
import MobileNav from "../MobileNav/MobileNav.jsx";
import logo from '../../assets/images/logo.png'; 
import { ThemeContext } from '../../utils/ThemeContext';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src={logo} alt="" />
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
                        <div className="wrapper">
                            <div className="toggle">
                                <input
                                    className="toggle-input"
                                    type="checkbox"
                                    onChange={toggleTheme}
                                    checked={theme === 'dark'}
                                />
                                <div className="toggle-bg"></div>
                                <div className="toggle-switch">
                                    <div className="toggle-switch-figure"></div>
                                    <div className="toggle-switch-figureAlt"></div>
                                </div>
                            </div>
                        </div>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
