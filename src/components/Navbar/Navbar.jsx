import React, {useState} from "react";
import './Navbar.css';
import MobileNav from "../MobileNav/MobileNav.jsx";
import logo from '../../assets/images/logo.png'; 
const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src={logo} alt="" />
                    <ul>
                        <li>
                            <a className="menu-item" href="">Home</a>
                        </li>
                        <li>
                            <a className="menu-item" href="">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href="">Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#contact-container">Contact Me</a>
                        </li>
                        <button className="contact-btn" onClick={()=>{}}>
                            Hire Me
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{fontSize:"1.8rem"}}
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