
import "./Footer.css";
import Img1 from "../assets/icon/Logomark.png"
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Site Map</h3>
              <ul>
                <li>
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Service Lineup 1</a>
                </li>
                <li>
                  <a href="#">Service Lineup 2</a>
                </li>
                <li>
                  <a href="#">Service Lineup 3</a>
                </li>
                <li>
                  <a href="#">Service Lineup 4</a>
                </li>
                <li>
                  <a href="#">Service Lineup 5</a>
                </li>
                <li>
                  <a href="#">Service Lineup 6</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="#">Product Lineup 1</a>
                </li>
                <li>
                  <a href="#">Product Lineup 2</a>
                </li>
                <li>
                  <a href="#">Product Lineup 3</a>
                </li>
                <li>
                  <a href="#">Product Lineup 4</a>
                </li>
                <li>
                  <a href="#">Product Lineup 5</a>
                </li>
                <li>
                  <a href="#">Product Lineup 6</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Help & Support</h3>
              <ul>
                <li>
                  <a href="#">Live Chat</a>
                </li>
                <li>
                  <a href="#">Email Support</a>
                </li>
                <li>
                  <a href="#">Product Refund</a>
                </li>
                <li>
                  <a href="#">Submit Feedback</a>
                </li>
                <li>
                  <a href="#">Help Ticket</a>
                </li>
                <li>
                  <a href="#">Call Center</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">HIPAA Notice</a>
                </li>
                <li>
                  <a href="#">Data Policy</a>
                </li>
                <li>
                  <a href="#">AI Privacy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Lawyer's Corner</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Pricing</h3>
              <ul>
                <li>
                  <a href="#">Pricing Tier 1</a>
                </li>
                <li>
                  <a href="#">Pricing Tier 2</a>
                </li>
                <li>
                  <a href="#">Pricing Tier 3</a>
                </li>
                <li>
                  <a href="#">Pricing Tier 4</a>
                </li>
                <li>
                  <a href="#">Pricing Tier 5</a>
                </li>
                <li>
                  <a href="#">Pricing Tier 6</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="logo">
              <img src={Img1} alt="" srcset="" />
              <span className="logo-text-1">slothui</span>
            </div>
            <div className="copyright">
              Copyright 2025 slothUI. All Rights Reserved.
            </div>
            <IoIosArrowUp className="arrow" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
