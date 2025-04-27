import { FaMapMarkerAlt } from "react-icons/fa";
import "./OurOffice.css"

const OurOffice = () => {
  return (
    <div>
      <div class="OurOffice">
        <button class="Visit-text">
        Visit Us Anytime
        </button>

        <h1 class="title">Our Office</h1>

        <p class="title2">
          You can visit our office anytime but please don't stalk us or don't be
          creepy.
        </p>

        <div class="office-grid">
          <div class="office-card">
            <div class="icon-container">
              <FaMapMarkerAlt class="icons"></FaMapMarkerAlt>
            </div>
            <h3 class="country">Japan</h3>
            <p class="address">2-15 Ikejiri Street</p>
            <p class="address">Tokyo, TO 77812</p>
          </div>

          <div class="office-card">
            <div class="icon-container">
              <FaMapMarkerAlt class="icons"></FaMapMarkerAlt>
            </div>
            <h3 class="country">USA</h3>
            <p class="address">2210 Franklin Street</p>
            <p class="address">New York, NY 21231</p>
          </div>

          <div class="office-card">
            <div class="icon-container">
              <FaMapMarkerAlt class="icons"></FaMapMarkerAlt>
            </div>
            <h3 class="country">Canada</h3>
            <p class="address">2215 Maple Syrup Street</p>
            <p class="address">Ottawa, ON 77847</p>
          </div>

          <div class="office-card">
            <div class="icon-container">
              <FaMapMarkerAlt class="icons"></FaMapMarkerAlt>
            </div>
            <h3 class="country">South Korea</h3>
            <p class="address">2215 Gangyang Street</p>
            <p class="address">Gangnam, GN 22124</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
