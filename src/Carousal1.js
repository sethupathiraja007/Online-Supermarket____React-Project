import React from "react";
import img1 from "./carousal1/mango.jpg";
import img2 from "./carousal1/milk.jpg";
import img3 from "./carousal1/good.jpg";
import img4 from "./carousal1/snacks.jpg";
import img5 from "./carousal1/baby.jpg";
export default function carousal1() {
  return (
    <div>
      {/* CAROUSEL 1*/}

      <div
        id="demo1"
        className="carousel slide "
        data-bs-ride="carousel"
        style={{ margin: "0" }}
      >
        <div className="carousel-indicators carousel-indicators-expand-sm">
          {/* CAROUSEL SIDE BUTTON */}
          <button
            type="button"
            data-bs-target="#demo1"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo1"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo1"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#demo1"
            data-bs-slide-to="3"
          ></button>
          <button
            type="button"
            data-bs-target="#demo1"
            data-bs-slide-to="4"
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
          <div className="carousel-item">
            <img
              src={img4}
              alt="New York"
              className="d-block"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img5}
              alt="New York"
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
            data-bs-target="#demo1"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo1"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
