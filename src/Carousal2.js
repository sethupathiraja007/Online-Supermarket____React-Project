import React from "react";
import img1 from "./carousal2/biscut.jpg";
import img2 from "./carousal2/pam.jpg";
import img3 from "./carousal2/dog.jpg";
export default function Carousal2() {
  return (
    <div>
      {/* CAROUSEL 2*/}

      <div
        id="demo2"
        className="carousel slide "
        data-bs-ride="carousel"
        style={{ margin: "0" }}
      >
        <div className="carousel-indicators carousel-indicators-expand-sm">
          {/* CAROUSEL SIDE BUTTON */}
          <button
            type="button"
            data-bs-target="#demo2"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo2"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo2"
            data-bs-slide-to="2"
          ></button>
        </div>
        {/* CAROUSEL IMAGES */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              alt="Los Angeles"
              className="d-block"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              alt="Chicago"
              className="d-block"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              alt="Chicago"
              className="d-block"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div>
          {/* CAROUSEL BOTTOM BUTTON */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo2"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo2"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
