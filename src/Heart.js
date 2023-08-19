import React, { useEffect, useState } from "react";

import Nav2 from "./Nav2";
import img from "./sl1.png";
import img3 from "./add1.jpg";
import img4 from "./wish.png";
import empty from "./heart.png";
import filled from "./filledheart.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Foot from "./Foot";



export default function Heart() {


  //sessinstorage get from cardloop,fruitscard,card1,card2,card3

  var newdata1 = JSON.parse(sessionStorage.getItem("veg1"));
  sessionStorage.setItem("veg1", JSON.stringify(newdata1));
  const [newdatas1, setNewdatas1] = useState(
    JSON.parse(sessionStorage.getItem("veg1")) || []
  );
  console.log(newdata1);

  //////////////////////////////////////////////////////////////////////////////////////////

  //button(addtocart and removecart)
  const [initial, setInitial] = useState(false);
  const [initial1, setInitial1] = useState(false);
  const [initial2, setInitial2] = useState([]);

  //addtocart and removecart set sessionstorage

  var sessionget = JSON.parse(sessionStorage.getItem("veg"));
  const [users, setUsers] = useState(sessionget ? sessionget : initial2);
  sessionStorage.setItem("veg", JSON.stringify(users));
  console.log(users);
  console.log(sessionget);

  //addtocart function
  var add = (user) => {
    user.length = users.length + 1;
    setUsers([...users, user]);
  };

  //removecart function
  var removecart = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  ////////////////////////////////////////////////////////////////////////////

  // addtocart and wishlist count  set session storage

  //wishlist
  const raja = JSON.parse(sessionStorage.getItem("count"));
  const [count, setcount] = useState(raja);
  sessionStorage.setItem("count", JSON.stringify(count));

  //add to cart
  const raja1 = JSON.parse(sessionStorage.getItem("count1"));
  const [count1, setcount1] = useState(raja1);
  sessionStorage.setItem("count1", JSON.stringify(count1));

  //////////////////////////////////////////////////////////////////////////////

  //image
  const [heart, setHeart] = useState(false);
  const [heart1, setHeart1] = useState(false);
  const [heart2, setHeart2] = useState([]);

  var sessionget1 = JSON.parse(sessionStorage.getItem("veg1"));
  const [heartuser, setHeartusers] = useState(
    sessionget1 ? sessionget1 : heart2
  );
  sessionStorage.setItem("veg1", JSON.stringify(heartuser));

  console.log(heartuser);
  console.log(sessionget1);

  var removecart1 = (id) => {
    const keys = JSON.parse(sessionStorage.getItem("datajson")) || [];
    console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].id == id) {
        keys[i].wish = false;
      }
    }
    sessionStorage.setItem("datajson", JSON.stringify(keys));

    setHeartusers(heartuser.filter((user) => user.id !== id));
    const updatedNewdatas1 = newdatas1.filter((user) => user.id !== id);
    setNewdatas1(updatedNewdatas1);
  };

  return (
    <div>
      <>
        <Nav2 />
        <div>
          <div className="container-fluid raja">
            <div className="row">
              {newdatas1.map((user) => {
                console.log(user);
                return (
                  <div className="col-sm-6 col-lg-3 col-md-4" key={user.id}>
                    <div
                      className="card"
                      style={{
                        marginTop: "10px",
                        boxShadow: "10px 10px 20px black",
                      }}
                    >
                      <div style={{ backgroundColor: "rgb(213,238,240)"  }}>
                        <img
                          src={img}
                          alt="Logo"
                          style={{ width: "60px" }}
                          className="rounded-pill"
                        />
                        ROLEX MARKET
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
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
                            backgroundColor: "rgb(213,238,240)" ,
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
                                    console.log("1");
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
                                    <FontAwesomeIcon icon={faCartShopping} />{" "}
                                    Add To Cart
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
                              <div></div>
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
        </div>
      </>
      <br/>
      <Foot/>
    </div>
  );
}
