import { CiStar } from "react-icons/ci";
import "./PeopleSay.css";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import Img1 from "../assets/Avatar/Avatar (1).png";
import Img2 from "../assets/Avatar/Avatar (2).png";
import Img3 from "../assets/Avatar/Avatar (3).png";
import Img4 from "../assets/Avatar/Avatar (4).png";
import Img5 from "../assets/Avatar/Avatar (5).png";
import Img6 from "../assets/Avatar/Avatar (6).png";
import Img7 from "../assets/Avatar/Avatar (7).png";
import Img8 from "../assets/Avatar/Avatar (8).png";
import Img9 from "../assets/Avatar/Avatar (9).png";
const PeopleSay = () => {
  return (
    <div>
      <div className="PeopleSay">
        <div className="testimonials-header">
          <h3 className="subtitle">Testimonials</h3>
          <h2 className="title">What People Say</h2>
          <p className="description">
            You can visit our office anytime but please don't stalk us or don't
            be creepy.
          </p>
        </div>

        <div className="testimonials-grid">
          {/* card 1  */}
          <div className="card">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel
              urna at metus tempor mattis, or not, whatever.
            </p>
            <div className="card-img">
              <div className="img">
                <img src={Img9} alt="" srcset="" />
              </div>
              <div className="author-info">
                <h4 className="author-name">K_AE_A-13</h4>
                <p className="author-role">Product Designer, dot(hi)</p>
              </div>
            </div>
          </div>

          {/* card 2  */}
          <div className="card">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
              <CiStar />
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel
              urna at metus tempor mattis, or not, whatever.
            </p>
            <div className="card-img">
              <div className="img">
                <img src={Img1} alt="" srcset="" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Aditya/U.Wu</h4>
                <p className="author-role">Product Designer, dot(hi)</p>
              </div>
            </div>
          </div>

          {/* card 3  */}
          <div className="card">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar></FaStar>
              <CiStar />
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel
              urna at metus tempor mattis, or not, whatever.
            </p>
            <div className="card-img">
              <div className="img">
                <img src={Img2} alt="" srcset="" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Mechatronics.Y</h4>
                <p className="author-role">Product Designer, dot(hi)</p>
              </div>
            </div>
          </div>

          {/* card 4  */}
          <div className="card">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel
              urna at metus tempor mattis, or not, whatever.
            </p>
            <div className="card-img">
              <div className="img">
                <img src={Img3} alt="" srcset="" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Qarick Kabama</h4>
                <p className="author-role">Product Designer, dot(hi)</p>
              </div>
            </div>
          </div>

          {/* card 5 */}
          <div className="card">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <FaRegStarHalfStroke />
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel
              urna at metus tempor mattis, or not, whatever.
            </p>
            <div className="card-img">
              <div className="img">
                <img src={Img4} alt="" srcset="" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Skyler Twift</h4>
                <p className="author-role">Product Designer, dot(hi)</p>
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div className="card">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
              <CiStar />
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel
              urna at metus tempor mattis, or not, whatever.
            </p>
            <div className="card-img">
              <div className="img">
                <img src={Img5} alt="" srcset="" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Attina Yuki</h4>
                <p className="author-role">Product Designer, dot(hi)</p>
              </div>
            </div>
          </div>

          {/* card 7  */}
          <div className="card">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
              <CiStar />
              <CiStar />
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel
              urna at metus tempor mattis, or not, whatever.
            </p>
            <div className="card-img">
              <div className="img">
                <img src={Img6} alt="" srcset="" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Bob Jelen</h4>
                <p className="author-role">Product Designer, dot(hi)</p>
              </div>
            </div>
          </div>

          {/* card 8  */}
          <div className="card">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel
              urna at metus tempor mattis, or not, whatever.
            </p>
            <div className="card-img">
              <div className="img">
                <img src={Img7} alt="" srcset="" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Vermillion D. Gray</h4>
                <p className="author-role">Product Designer, dot(hi)</p>
              </div>
            </div>
          </div>

          {/* card 9  */}
          <div className="card">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel
              urna at metus tempor mattis, or not, whatever.
            </p>
            <div className="card-img">
              <div className="img">
                <img src={Img8} alt="" srcset="" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Zuchiwai Wu</h4>
                <p className="author-role">Product Designer, dot(hi)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSay;
