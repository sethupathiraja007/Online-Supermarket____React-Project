import React from "react";
import img from "./sl1.png";
import "./Foot.css";
export default function Foot() {
  return (
    <div>
      <div className="footer">
        <div>
          {" "}
          <img
            src={img}
            alt="Logo"
            style={{ width: "60px" }}
            className="rounded-pill"
          />{" "}
          ROLEX MARKET
        </div>

        <div className="content">
          <div className="services">
            <h4>Services</h4>
            <p>
              <a href="#">App development</a>
            </p>
            <p>
              <a href="#">Web development</a>
            </p>
            <p>
              <a href="#">DevOps</a>
            </p>
            <p>
              <a href="#">Web designing</a>
            </p>
          </div>
          <div className="social-media">
            <h4>Social</h4>
            <p>
              <a href="#">
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </p>
            <p>
              <a href="https://github.com/farazc60">
                <i className="fab fa-github"></i> Github
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/codewithfaraz">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </p>
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Blogs</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>
          <div className="details">
            <h4 className="address">Address</h4>
            <div>
              <p>3-9/27,Venkateshwarapuram, </p>
              <p> Alangulam(Taluk ),</p>
              <p> Tenkasi(District)-627 854.</p>
            </div>
            <h4 className="mobile">Mobile Number</h4>
            <p>
              <a href="#">+91-88833*****</a>
            </p>
            <h4 className="mail">Email</h4>
            <p>
              <a href="#">sethupathirajae1999@gmail.com</a>
            </p>
          </div>
        </div>
        <footer>
          <hr />© 2023 Rolex Market .
          <hr/>
        </footer>
      </div>
    </div>
  );
}
