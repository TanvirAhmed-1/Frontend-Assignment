import "./Banner.css";
import Img1 from "../assets/MockUp.png";
import Img2 from "../assets/Desktop-min 1.png";
import Apple from "../assets/Apple logo.png"
import PlayStor from "../assets/Google Play logo.png"

const Banner = () => {
  return (
    <div>
      <section class="hero">
        <p class="subtitle">
          <i class="fa-solid fa-code"></i>Design System For Devs
        </p>
        <h1>Unleash Your Inner Design Sloth Today.</h1>
        <p class="description">
          Suspendisse felis diam, interdum quis ante lorem ipsum dolor sit amet.
          Cras fermentum odio eu feugiat pretium nibh ipsum. Venenatis cras sed
          felis eget velit aliquet.
        </p>

        {/* <App Store Buttons */}
        <div class="app-buttons">
          <button class="app-button">
            <img class="app-image" src={Apple} alt="" srcset="" />
            <div>
              <div class="app-button-small">Download on the</div>
              <div class="app-button-large">App Store</div>
            </div>
          </button>
          <button class="app-button">
            <img  class="app-image" src={PlayStor} alt="" srcset="" />
            {/* <i class="fa-brands fa-google-play"></i> */}
            <div>
              <div class="app-button-small">Get it on</div>
              <div class="app-button-large">Google Play</div>
            </div>
          </button>
        </div>

        {/* Dashboard Preview */}
        <div class="dashboard-container">
          {/* <!-- Main Dashboard Image --> */}
          <div class="dashboard-main">
            <img src={Img2} alt="" srcset="" />
          </div>

          <div class="dashboard-mobile">
            <img src={Img1} alt="" srcset="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
