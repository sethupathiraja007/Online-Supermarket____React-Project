import React, { useEffect, useState } from "react";
import datas from "./Data.json";
import img from "./sl1.png";
import img2 from "./carousal3/fruit.jpg";
import Nav2 from "./Nav2";
import empty from "./heart.png";
import filled from "./filledheart.png";
import mea from "./mea.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import veglogo from "./tom.jpg";
import ricelogo from "./img2.jpg";
import oillogo from "./img7.jpg";
import dal from "./img1.jpg";
import Foot from "./Foot";

export default function Fruitscard() {

 

  const keys = JSON.parse(sessionStorage.getItem("datajson1"));
  const [Data, setData] = useState(keys ? keys : datas.fruits);
  sessionStorage.setItem("datajson1", JSON.stringify(Data));

  //button
  const [initial, setInitial] = useState(false);
  const [initial1, setInitial1] = useState(false);
  const [initial2, setInitial2] = useState([]);

  var sessionget = JSON.parse(sessionStorage.getItem("veg"));
  const [users, setUsers] = useState(sessionget ? sessionget : initial2);
  sessionStorage.setItem("veg", JSON.stringify(users));
  console.log(users);
  console.log(sessionget);

  var add = (user) => {
    user.length = users.length + 1;
    setUsers([...users, user]);
  };
  var removecart = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //image
  const [heart, setHeart] = useState(false);
  const [heart1, setHeart1] = useState(false);
  const [heart2, setHeart2] = useState([]);

  //wishlist
  const raja = JSON.parse(sessionStorage.getItem("count"));
  const [count, setcount] = useState(raja);
  sessionStorage.setItem("count", JSON.stringify(count));

  //add to cart
  const raja1 = JSON.parse(sessionStorage.getItem("count1"));
  const [count1, setcount1] = useState(raja1);
  sessionStorage.setItem("count1", JSON.stringify(count1));

  var sessionget1 = JSON.parse(sessionStorage.getItem("veg1"));
  const [heartuser, setHeartusers] = useState(
    sessionget1 ? sessionget1 : heart2
  );
  console.log(heartuser);
  sessionStorage.setItem("veg1", JSON.stringify(heartuser));
  console.log(sessionget1);

  var add1 = (user) => {
    user.length = heartuser.length + 1;
    setHeartusers([...heartuser, user]);
  };
  var removecart1 = (id) => {
    setHeartusers(heartuser.filter((user) => user.id !== id));
  };

  return (
    // FRUITS CARD
    <div>
      <Nav2 />
      <div className="container-fluid">
        <img
          src={img2}
          alt="Chicago"
          className="d-block"
          style={{ width: "100%", height: "100%" }}
        />
        <br />
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "150px",
            border: "1px solid black",
          }}
        >
          <div class="spinner-grow  text-warning">
            <Link to="/cardloop">
              {" "}
              <img src={veglogo} style={{ width: "100px" }} />{" "}
              <button style={{ border: "none", outline: "0" }}>
                VEGETABLES
              </button>
            </Link>
          </div>
          <div class="spinner-grow  text-warning">
            <Link to="/card1">
              {" "}
              <img src={ricelogo} style={{ width: "100px" }} />{" "}
              <button style={{ border: "none", outline: "0" }}>RICE</button>
            </Link>
          </div>
          <div class="spinner-grow  text-warning">
            <Link to="/card3">
              {" "}
              <img src={oillogo} style={{ width: "100px" }} />{" "}
              <button style={{ border: "none", outline: "0" }}>OIL</button>
            </Link>
          </div>
          <div class="spinner-grow  text-warning">
            <Link to="/card2">
              {" "}
              <img src={dal} style={{ width: "100px" }} />{" "}
              <button style={{ border: "none", outline: "0" }}>DAL</button>
            </Link>
          </div>
          <div class="spinner-grow  text-warning">
            <Link to="/meat">
              {" "}
              <img src={mea}style={{ width: "100px" }} />{" "}
              <button style={{ border: "none", outline: "0" }}>MEAT</button>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          {Data.map((user) => {
            // console.log(user);
            return (
              <div className="col-sm-6 col-lg-3 col-md-4 " key={user.id}>
                <div
                  className="card"
                  style={{
                    marginTop: "10px",
                    boxShadow: "10px 10px 20px black",
                  }}
                >
                  <div style={{ backgroundColor: " rgb(213,238,240)" }}>
                    {" "}
                    <img
                      src={img}
                      alt="Logo"
                      style={{ width: "60px" }}
                      className="rounded-pill"
                    />{" "}
                    ROLEX MARKET
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <img
                      class="card-img-top"
                      src={user.image}
                      alt="Card image"
                      style={{ width: "40%", height: "40%" }}
                    />
                  </div>
                  <hr />
                  <div className="card-body">
                    <div
                      style={{
                        backgroundColor: "rgb(213,238,240)",
                        textAlign: "center",
                      }}
                    >
                      <h4 className="card-title">{user.name}</h4>
                      <p className="card-text">Price ₹{user.detail}/KG</p>
                    </div>
                    <hr />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* button */}

                      <div>
                        {user.wish1 ? (
                          <div>
                            <button
                              className="btn"
                              onClick={() => {
                                removecart(user.id);
                                setInitial1(!initial1);
                                user.wish1 = !user.wish1;
                                setcount1(count1 - 1);
                              }}
                              style={{ fontSize: "20px" }}
                            >
                              <Link to="" className="btn btn-danger">
                                <FontAwesomeIcon icon={faCartShopping} />
                                Remove Cart
                              </Link>
                            </button>
                          </div>
                        ) : (
                          <div>
                            <button
                              className="btn"
                              onClick={() => {
                                add(user);
                                setInitial2(user);
                                user.wish1 = !user.wish1;
                                console.log(user.wish1);
                                setInitial1(!initial1);
                                setcount1(count1 + 1);
                              }}
                              style={{ fontSize: "20px" }}
                            >
                              <Link to="" className="btn btn-success">
                                <FontAwesomeIcon icon={faCartShopping} /> Add To
                                Cart
                              </Link>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* heart */}
                      <div>
                        {user.wish ? (
                          <div>
                            <button
                              onClick={() => {
                                setHeart(!heart);
                                setcount(count - 1);

                                removecart1(user.id);
                                setHeart1(!heart1);
                                user.wish = !user.wish;
                                console.log(heart1);
                              }}
                              style={{
                                fontSize: "20px",
                                border: "none",
                                outline: "0",
                                backgroundColor: "white",
                              }}
                            >
                              <img
                                src={filled}
                                style={{ width: "3vw", height: "6vh" }}
                              />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <button
                              // className="btn"
                              onClick={() => {
                                console.log(user.wish);
                                setHeart(!heart);
                                setcount(count + 1);

                                add1(user);
                                setHeart2(user);
                                user.wish = !user.wish;

                                setHeart1(!heart1);
                                console.log(user);
                              }}
                              style={{
                                fontSize: "20px",
                                border: "none",
                                outline: "0",
                                backgroundColor: "white",
                              }}
                            >
                              <img
                                src={empty}
                                style={{ width: "3vw", height: "6vh" }}
                              />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br/>
<Foot/>
    </div>
  );
}
