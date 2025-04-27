import "./Banner.css";
import Img1 from "../assets/MockUp.png";
import Img2 from "../assets/img/Desktop-min 1 (2).png";
import Apple from "../assets/img/Button App Store (1).png"
import PlayStor from "../assets/img/Button App Store.png"

const Banner = () => {
  return (
    <div>
      <section className="hero">
        <p className="subtitle1">
          Design System For Devs
        </p>
        <h1>Unleash Your Inner Design Sloth Today.</h1>
<div className="Banner-p">
<p className="description1">
          Suspendisse felis diam, interdum quis ante lorem ipsum dolor sit amet.
          Cras fermentum odio eu feugiat pretium nibh ipsum. Venenatis cras sed
          felis eget velit aliquet.
        </p>
</div>

        {/* <App Store Buttons */}
        <div className="app-buttons">
          <button className="app-button">
            <img className="app-image" src={Apple} alt="" srcset="" />
          </button>
          <button className="app-button">
            <img  className="app-image" src={PlayStor} alt="" srcset="" />
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="dashboard-container">
          <div className="dashboard-main">
            <img src={Img2} alt="" srcset="" />
          </div>

          <div className="dashboard-mobile">
            <img src={Img1} alt="" srcset="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
