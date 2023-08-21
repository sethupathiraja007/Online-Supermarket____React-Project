import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import img from "./sl1.png";
import "./nav2.css";
import empty from "./wishempty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCartShopping,
  faHouse,
  faLocationDot,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export default function Nav2() {
  const navigate = useNavigate();
  // const location = useLocation();
  const dataa = JSON.parse(sessionStorage.getItem("values"));
  console.log(dataa);
  var result = dataa.toUpperCase();

  var sethu = JSON.parse(sessionStorage.getItem("count"));
  var sethu1 = JSON.parse(sessionStorage.getItem("count1"));

  //sessioin storage remove

  const remove = () => {
    sessionStorage.removeItem("values");
    sessionStorage.removeItem("count");
    sessionStorage.removeItem("count1");
    sessionStorage.removeItem("datajson1");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src={img}
              alt="Logo"
              style={{ width: "60px" }}
              className="rounded-pill"
            />
            <span style={{ color: "black" }}>
              {" "}
              <b>ROLEX MARKET</b>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="list">
            <div className="collapse navbar-collapse  " id="mynavbar">
              <ul className="navbar-nav me-auto ">
                <li className="nav-item ">
                  <a className="nav-link">
                    <Link to="/home" style={{ padding: "3px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faHouse} /> HOME
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link
                      to="/"
                      style={{ padding: "3px" }}
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      <FontAwesomeIcon icon={faLocationDot} />
                      LOCATION
                    </Link>
                  </a>

                  {/* <!-- The Modal --> */}
                  <div class="modal" id="myModal">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        {/* <!-- Modal Header --> */}
                        <div
                          class="modal-header"
                          style={{ backgroundColor: "rgb(213,238,240)" }}
                        >
                          <h4 class="modal-title">
                            {" "}
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
                          </h4>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div
                          class="modal-body"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15765.759091512862!2d77.54730685262378!3d8.9315595441925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041f5a14614975%3A0xbd44cab218e25de9!2sEdison%20Nadar%20Home!5e0!3m2!1sen!2sin!4v1688092650289!5m2!1sen!2sin"
                            width="300px"
                            height="300px"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div
                          class="modal-footer"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            backgroundColor: "rgb(213,238,240)",
                          }}
                        >
                          <div>
                            <h3>Rolex Market,</h3>
                            <h4>3-9/27,Venkateshwarapuram,</h4>
                            <h5>Alangulam(Taluk ),</h5>
                            <h6>Tenkasi(District)-627 854.</h6>
                          </div>
                          <div>
                            {" "}
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/add" style={{ padding: "3px" }}>
                      <FontAwesomeIcon icon={faCartShopping} />
                      SHOPPNG CART
                      <span className="badge bg-success">{sethu1}</span>
                    </Link>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" style={{ padding: "3px" }}>
                    <Link to="/heart">
                      {" "}
                      <img src={empty} style={{ width: "25px" }} />
                      <span className="badge bg-danger">{sethu}</span>
                    </Link>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" style={{ padding: "3px" }}>
                    <button
                      style={{
                        border: "none",
                        outline: "0",
                        backgroundColor: "rgb(213,238,240)",
                      }}
                    >
                      {" "}
                      <Link to="/cart">
                        <FontAwesomeIcon icon={faUser} /> {result}
                      </Link>
                    </button>
                  </a>
                </li>
                <li className="nav-item " style={{ listStyleType: "none" }}>
                  <a className="nav-link">
                    <Link to="/Online-Supermarket____React-Project" style={{ padding: "3px" }}>
                      <button
                        onClick={remove}
                        style={{
                          border: "none",
                          outline: "0",
                          backgroundColor: "rgb(213,238,240)",
                        }}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        LOGOUT
                      </button>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
