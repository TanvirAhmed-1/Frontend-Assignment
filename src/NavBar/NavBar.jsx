import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <i class="fa-solid fa-circle-notch"></i>
          <span>slothful</span>
        </div>
        <div class="menu">
          <a href="#">
            <i class="fa-solid fa-puzzle-piece"></i>Features
          </a>
          <a href="#">
            <i class="fa-solid fa-trophy"></i>Achievements
          </a>
          <a href="#">
            <i class="fa-solid fa-comment"></i>Testimonials
          </a>
          <a href="#">
            <i class="fa-solid fa-circle-question"></i>FAQ
          </a>
        </div>
        <div class="auth-buttons">
          <a href="#" class="btn-signup">
            <i class="fa-solid fa-user-plus"></i>Sign Up
          </a>
          <a href="#" class="btn-login">
            <i class="fa-solid fa-right-to-bracket"></i>Log In
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
