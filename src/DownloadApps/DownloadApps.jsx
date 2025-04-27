import "./DownloadApps.css";
import Img1 from "../assets/img/Screen (1).png";
import Img2 from "../assets/img/Screen (2).png";

const DownloadApps = () => {
  return (
    <div className="app">
      <div className="con">
        <div className="left-section">
          <h1>Let's Download The App.</h1>
          <p className="app-title">
            Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. 
            Ultricies integer quis auctor elit sed vulputate mi. Massa id neque aliquam vestibulum morbi blandit cursus.
          </p>
          <div className="buttons">
            <button className="btn btn-outline">Learn More</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>

        <div className="right-section">
          <div className="mobile-1">
            <img src={Img1} alt="Mobile Screen 1" />
          </div>

          <div className="mobile-2">
            <img src={Img2} alt="Mobile Screen 2" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DownloadApps;
