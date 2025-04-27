import { FaMapMarkerAlt } from "react-icons/fa";
import "./OurOffice.css"

const OurOffice = () => {
  return (
    <div>
      <div className="OurOffice">
        <button className="Visit-text">
        Visit Us Anytime
        </button>

        <h1 className="title">Our Office</h1>

        <p className="title2">
          You can visit our office anytime but please don't stalk us or don't be
          creepy.
        </p>

        <div className="office-grid">
          <div className="office-card">
            <div className="icon-container">
              <FaMapMarkerAlt className="icons"></FaMapMarkerAlt>
            </div>
            <h3 className="country">Japan</h3>
            <p className="address">2-15 Ikejiri Street</p>
            <p className="address">Tokyo, TO 77812</p>
          </div>

          <div className="office-card">
            <div className="icon-container">
              <FaMapMarkerAlt className="icons"></FaMapMarkerAlt>
            </div>
            <h3 className="country">USA</h3>
            <p className="address">2210 Franklin Street</p>
            <p className="address">New York, NY 21231</p>
          </div>

          <div className="office-card">
            <div className="icon-container">
              <FaMapMarkerAlt className="icons"></FaMapMarkerAlt>
            </div>
            <h3 className="country">Canada</h3>
            <p className="address">2215 Maple Syrup Street</p>
            <p className="address">Ottawa, ON 77847</p>
          </div>

          <div className="office-card">
            <div className="icon-container">
              <FaMapMarkerAlt className="icons"></FaMapMarkerAlt>
            </div>
            <h3 className="country">South Korea</h3>
            <p className="address">2215 Gangyang Street</p>
            <p className="address">Gangnam, GN 22124</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
