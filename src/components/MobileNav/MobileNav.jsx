import { useContext } from "react";
import './MobileNav.css';
import { ThemeContext } from '../../utils/ThemeContext';
import logo from '../../assets/images/logo.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleMenuClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container" onClick={handleMenuClick}>
                <img className='logo' src={logo} alt="Logo" />
                <ul>
                    <li>
                        <a className="menu-item" href="#Hero">Accueil</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#Skills">Compétences</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#WorkExperience">Projets</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#Contact">Contact</a>
                    </li>
                    {/* <button className="menu-btn" onClick={toggleTheme}>
                        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    </button> */}
                </ul>
            </div>
        </div>
    );
}

export default MobileNav;
