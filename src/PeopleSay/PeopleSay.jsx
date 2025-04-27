
import { CiStar } from "react-icons/ci";
import "./PeopleSay.css"
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import Img1 from "../assets/Avatar/Avatar (1).png"
import Img2 from "../assets/Avatar/Avatar (2).png"
import Img3 from "../assets/Avatar/Avatar (3).png"
import Img4 from "../assets/Avatar/Avatar (4).png"
import Img5 from "../assets/Avatar/Avatar (5).png"
import Img6 from "../assets/Avatar/Avatar (6).png"
import Img7 from "../assets/Avatar/Avatar (7).png"
import Img8 from "../assets/Avatar/Avatar (8).png"
import Img9 from "../assets/Avatar/Avatar (9).png"
const PeopleSay = () => {
    return (
        <div>
                <div class="PeopleSay">
        <div class="testimonials-header">
            <h3 class="subtitle">Testimonials</h3>
            <h2 class="title">What People Say</h2>
            <p class="description">You can visit our office anytime but please don't stalk us or don't be creepy.</p>
        </div>

        <div class="testimonials-grid">
             {/* card 1  */}
            <div class="card">
                <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                
                </div>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.</p>
                <div class="card-img">
                    <div class="img">
                        <img src={Img9} alt="" srcset="" />
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">K_AE_A-13</h4>
                        <p class="author-role">Product Designer, dot(hi)</p>
                    </div>
                </div>
            </div>

             {/* card 2  */}
            <div class="card">
                <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> 
                <FaRegStarHalfStroke /> 
                <CiStar />
                </div>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.</p>
                <div class="card-img">
                    <div class="img">
                      <img src={Img1}  alt="" srcset="" />
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">Aditya/U.Wu</h4>
                        <p class="author-role">Product Designer, dot(hi)</p>
                    </div>
                </div>
            </div>

             {/* card 3  */}
            <div class="card">
                <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> 
                <FaStar></FaStar> 
                <CiStar />
                </div>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.</p>
                <div class="card-img">
                    <div class="img">
                        <img src={Img2} alt="" srcset="" />
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">Mechatronics.Y</h4>
                        <p class="author-role">Product Designer, dot(hi)</p>
                    </div>
                </div>
            </div>

            {/* card 4  */}
            <div class="card">
                <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> 
                <FaStar></FaStar>
                <FaStar></FaStar>
                </div>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.</p>
                <div class="card-img">
                    <div class="img">
                        <img src={Img3}  alt="" srcset="" />
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">Qarick Kabama</h4>
                        <p class="author-role">Product Designer, dot(hi)</p>
                    </div>
                </div>
            </div>

             {/* card 5 */}
            <div class="card">
                <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
           
                <FaRegStarHalfStroke /> 
               
                </div>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.</p>
                <div class="card-img">
                    <div class="img">
                        <img src={Img4}  alt="" srcset="" />
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">Skyler Twift</h4>
                        <p class="author-role">Product Designer, dot(hi)</p>
                    </div>
                </div>
            </div>

            {/* card 6 */}
            <div class="card">
                <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar /> 
                <FaRegStarHalfStroke /> 
                <CiStar />
                </div>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.</p>
                <div class="card-img">
                    <div class="img">
                        <img src={Img5}  alt="" srcset="" />
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">Attina Yuki</h4>
                        <p class="author-role">Product Designer, dot(hi)</p>
                    </div>
                </div>
            </div>

            {/* card 7  */}
            <div class="card">
                <div class="stars">
                <FaStar />
                <FaStar /> 
                <FaRegStarHalfStroke /> 
                <CiStar />
                <CiStar />
                </div>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.</p>
                <div class="card-img">
                    <div class="img">
                        <img src={Img6}  alt="" srcset="" />
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">Bob Jelen</h4>
                        <p class="author-role">Product Designer, dot(hi)</p>
                    </div>
                </div>
            </div>

             {/* card 8  */}
            <div class="card">
                <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> 
                </div>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.</p>
                <div class="card-img">
                    <div class="img">
                        <img src={Img7}  alt="" srcset="" />
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">Vermillion D. Gray</h4>
                        <p class="author-role">Product Designer, dot(hi)</p>
                    </div>
                </div>
            </div>

            {/* card 9  */}
            <div class="card">
                <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> 
                <CiStar />
                </div>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.</p>
                <div class="card-img">
                    <div class="img">
                        <img src={Img8}  alt="" srcset="" />
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">Zuchiwai Wu</h4>
                        <p class="author-role">Product Designer, dot(hi)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default PeopleSay;