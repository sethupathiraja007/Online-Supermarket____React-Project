import React from "react";
import Nav from "./Nav";
import img1 from "./homecarousal/home1.jpg";
import img2 from "./homecarousal/home2.jpg";
import img3 from "./homecarousal/home3.jpg";
import img4 from "./homecarousal/home4.jpg";
import img5 from "./homecarousal/home5.jpg";
import "./welcome.css";
export default function Welcome() {
 
  return (
    <div>
      {/* NAV BAR */}
      <Nav />
      {/* CAROUSEL */}
      <div
        id="demo"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ margin: "0" }}
      >
        <div className="carousel-indicators carousel-indicators-expand-sm">
          {/* CAROUSEL SIDE BUTTON */}
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="3"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="4"
          ></button>
        </div>
        {/* CAROUSEL IMAGES */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img5}
              alt="Los Angeles"
              className="d-block"
              style={{ width: "100vw", height: "93vh" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img1}
              alt="Chicago"
              className="d-block"
              style={{ width: "100vw", height: "93vh" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              alt="Chicago"
              className="d-block"
              style={{ width: "100vw", height: "93vh" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              alt="New York"
              className="d-block"
              style={{ width: "100vw", height: "93vh" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img4}
              alt="New York"
              className="d-block"
              style={{ width: "100vw", height: "93vh" }}
            />
          </div>
        </div>
        <div>
          {/* CAROUSEL BOTTOM BUTTON */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

    </div>
  );
}
