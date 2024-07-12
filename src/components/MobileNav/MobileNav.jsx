import "./MobileNav.css";
import logo from "../../assets/images/logo.png";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
      aria-hidden={!isOpen}
      aria-expanded={isOpen}
    >
      <div
        className="mobile-menu-container"
        onClick={handleMenuClick}
        role="navigation"
        aria-label="Mobile Navigation Menu"
      >
        <img className="logo" src={logo} alt="Company Logo" />
        <ul>
          <li>
            <a className="menu-item" href="#Hero">
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
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
