import "./Brand.css";
import Img1 from "../assets/brand/Company Logo (9).png";
import Img2 from "../assets/brand/g2105.png";
import Img3 from "../assets/brand/Clip path group (5).png";
import Img4 from "../assets/brand/Group (1).png";
import Img5 from "../assets/brand/Company Logo (6).png";
import Img6 from "../assets/brand/Company Logo (7).png";
import Img7 from "../assets/brand/Company Logo (8).png";
import Img8 from "../assets/brand/Company Logo (5).png";

const Brand = () => {
  return (
    <div>
      <div class="brand">
        <div class="logo-grid">
          <div class="logo1">
            <img src={Img1} alt="" srcset="" />
          </div>
          <div class="logo1">
            <img src={Img2} alt="" srcset="" />
          </div>
          <div class="logo1">
            <img src={Img3} alt="" srcset="" />
          </div>
          <div class="logo1">
            <img src={Img4} alt="" srcset="" />
          </div>
          <div class="logo1">
            <img src={Img5} alt="" srcset="" />
          </div>
          <div class="logo1">
            <img src={Img6} alt="" srcset="" />
          </div>
        </div>

        <div class="logo-grid2">
          <div class="logo1">
            <img src={Img7} alt="" srcset="" />
          </div>
          <div class="logo1">
            <img src={Img8} alt="" srcset="" />
          </div>
          <div class="logo1">
            <img src={Img4} alt="" srcset="" />
          </div>
          <div class="logo1">
            <img src={Img5} alt="" srcset="" />
          </div>
          <div class="logo1">
            <img src={Img6} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
