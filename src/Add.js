import React, {  useState } from "react";
import Nav2 from "./Nav2";
import img from "./sl1.png";


import { Link } from "react-router-dom";
import Foot from "./Foot";

export default function Add() {

   const [newdata, setNewData] = useState(() => {
    const storedData = JSON.parse(sessionStorage.getItem("veg"));
    if (storedData) {
      return storedData.map((product) => ({ ...product, quantity: 1 }));
    } else {
      return []
    }
  });

  console.log(newdata);

  const handleDecrease = (index) => {
    const updatedData = [...newdata];
    if (updatedData[index].quantity > 1) {
      updatedData[index].quantity -= 1;
      setNewData(updatedData);
    } else {
      alert("Please select a minimum order");
    }
  };

  const handleIncrease = (index) => {
    const updatedData = [...newdata];
    updatedData[index].quantity += 1;
    setNewData(updatedData);
  };


  return (

    <>

      <Nav2 />
      <div>
        <div className="container-fluid">
          <div className="row">
            {newdata.map((user, index) => {
              return (
                <div className="col-sm-6 col-lg-3 col-md-4" key={user.id}>
                  <div
                    className="card"
                    style={{
                      marginTop: "10px",
                      boxShadow: "10px 10px 20px black",
                    }}
                  >
                    <div  style={{ backgroundColor: "rgb(213,238,240)" }}>
                      <img
                        src={img}
                        alt="Logo"
                        style={{ width: "60px" }}
                        className="rounded-pill"
                      />{" "}
                      ROLEX MARKET
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={user.image}
                        alt="Card image"
                        style={{ width: "40%", height: "40%" }}
                      />
                    </div>
                    <hr />
                    <div className="card-body">
                      <div style={{ textAlign: "center" , backgroundColor: "rgb(213,238,240)" }}>
                        <h4 className="card-title">{user.name}</h4>
                        <p className="card-text">Price ₹{user.detail}/KG</p>
                      </div>
                      <hr />
                    

                      <Link to="/cart"
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                      >
                        BUY NOW
                      </Link>
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
    </>
      );
}
