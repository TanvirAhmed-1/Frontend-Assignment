import { useState } from "react";
import "./NavBar.css";
import Img from "../assets/icon/Logomark.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={Img} alt="Slothful Logo" />
          <span>slothful</span>
        </div>
        
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <a href="#">Features</a>
          <a href="#">Achievements</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQ</a>
          <div className="mobile-auth-buttons">
            <a href="#" className="btn-signup">
              Sign Up
            </a>
            <a href="#" className="btn-login">
              Log In
            </a>
          </div>
        </div>
        
        <div className="auth-buttons">
          <a href="#" className="btn-signup">
            Sign Up
          </a>
          <a href="#" className="btn-login">
            Log In
          </a>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;