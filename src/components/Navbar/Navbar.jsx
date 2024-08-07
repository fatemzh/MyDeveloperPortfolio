import { useState, useContext } from "react";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav.jsx";
import logo from "../../assets/images/logo.png";
import { ThemeContext } from "../../utils/ThemeContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="Company Logo" />
          <ul>
            <li>
              <a className="menu-item" href="#Hero" id="#Hero">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#Skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#WorkExperience">
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" href="#Contact">
                Contact
              </a>
            </li>
            <div className="wrapper">
              <div className="toggle">
                <input
                  className="toggle-input"
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                  aria-label={
                    theme === "dark"
                      ? "Switch to light theme"
                      : "Switch to dark theme"
                  }
                />
                <div className="toggle-bg"></div>
                <div className="toggle-switch">
                  <div className="toggle-switch-figure"></div>
                  <div className="toggle-switch-figureAlt"></div>
                </div>
              </div>
            </div>
          </ul>
          <button
            className="menu-btn"
            onClick={toggleMenu}
            aria-expanded={openMenu}
            aria-controls="mobile-nav"
          >
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
  );
};

export default Navbar;
