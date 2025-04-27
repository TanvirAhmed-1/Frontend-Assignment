import "./NavBar.css";
import Img from "../assets/icon/Logomark.png"

const NavBar = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <img src={Img} alt="" srcset="" />
          <span>slothful</span>
        </div>
        <div class="menu">
          <a href="#">
            Features
          </a>
          <a href="#">
            Achievements
          </a>
          <a href="#">
            Testimonials
          </a>
          <a href="#">
            FAQ
          </a>
        </div>
        <div class="auth-buttons">
          <a href="#" class="btn-signup">
            Sign Up
          </a>
          <a href="#" class="btn-login">
            Log In
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
