import "./Banner.css";
import Img1 from "../assets/MockUp.png";
import Img2 from "../assets/img/Desktop-min 1 (2).png";
import Apple from "../assets/img/Button App Store (1).png"
import PlayStor from "../assets/img/Button App Store.png"

const Banner = () => {
  return (
    <div>
      <section class="hero">
        <p class="subtitle1">
          Design System For Devs
        </p>
        <h1>Unleash Your Inner Design Sloth Today.</h1>
<div class="Banner-p">
<p class="description1">
          Suspendisse felis diam, interdum quis ante lorem ipsum dolor sit amet.
          Cras fermentum odio eu feugiat pretium nibh ipsum. Venenatis cras sed
          felis eget velit aliquet.
        </p>
</div>

        {/* <App Store Buttons */}
        <div class="app-buttons">
          <button class="app-button">
            <img class="app-image" src={Apple} alt="" srcset="" />
          </button>
          <button class="app-button">
            <img  class="app-image" src={PlayStor} alt="" srcset="" />
          </button>
        </div>

        {/* Dashboard Preview */}
        <div class="dashboard-container">
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
