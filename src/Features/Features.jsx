import "./Features.css";
import Img1 from "../assets/icon/Vector (5).png"
import Img2 from "../assets/icon/Vector (1).png"
import Img3 from "../assets/icon/Broom.png"
import Img4 from "../assets/icon/SmileyWink.png"
import Img5 from "../assets/icon/Lightning.png"
import Img6 from "../assets/icon/ChartLine.png"

const Features = () => {
  return (
    <div>
      <div className="features-container">
        <div className="features-header">
          <p className="subtitle">Our Main Features</p>
          <h2>Our Primary Features</h2>
          <p className="description">
            Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt
            eget nullam non nisi. Nisi porta lorem mollis aliquam ut porttitor
            leo.
          </p>
        </div>

        <div className="features-grid">
          {/* section 1 */}
          <div className="feature-card">
            <div className="icon lightning-icon">
              <img src={Img5} alt="" srcset="" />
            </div>
            <h3>Lazy Efficient</h3>
            <p>
              A cras semper auctor neque. Proin libero nunc consequat interdum
              varius sit. Libero volutpat sed cras ornare arcu dui vivamus arcu
              felis.
            </p>
          </div>

          {/* section 2 */}
          <div className="feature-card">
            <div className="icon gear-icon">
              <img src={Img1} alt="" srcset="" />
            </div>
            <h3>Streamlined Process</h3>
            <p>
              Montes nascetur ridiculus mus mauris vitae ultricies leo integer
              malesuada. Orci porta non pulvinar neque laoreet.
            </p>
          </div>

          {/* section 3 */}
          <div className="feature-card">
            <div className="icon rocket-icon">
              <img src={Img3} alt="" srcset="" />
            </div>
            <h3>Minimum Effort</h3>
            <p>
              Tincidunt eget nullam non nisi est sit amet facilisis magna.
              Rhoncus dolor purus non enim praesent elementum.
            </p>
          </div>

          {/* section  4 */}
          <div className="feature-card">
            <div className="icon chart-icon">
              <img src={Img6} alt="" srcset="" />
            </div>
            <h3>Absolutely Easy To Use</h3>
            <p>
              Rutrum quisque non tellus orci ac. Purus viverra accumsan in nisl.
              Id interdum velit laoreet id donec ultrices adipiscing elit.
            </p>
          </div>

          {/* section 5 */}
          <div className="feature-card">
            <div className="icon moon-icon">
              <img src={Img2} alt="" srcset="" />
            </div>
            <h3>Just Sleep & Chill</h3>
            <p>
              Bibendum est ultricies integer quis auctor elit. Ultricies in
              iaculis nunc sed. A scelerisque purus semper eget. Facilisi morbi
              tempus iaculis.
            </p>
          </div>

          {/* section 7 */}
          <div className="feature-card">
            <div className="icon smile-icon">
            <img src={Img4} alt="" srcset="" />
            </div>
            <h3>Don't Worry About Life</h3>
            <p>
              Pharetra diam sit amet nisl suscipit adipiscing bibendum est.
              Risus ultricies tristique nulla aliquet enim tortor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
