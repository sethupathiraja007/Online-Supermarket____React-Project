import React, { useState } from "react";
import datas from "./Data.json";
import img from "./sl1.png";
import { Link } from "react-router-dom";
import Foot from "./Foot";
export default function Newcard() {
  const [Data, setData] = useState(datas.select);
  console.log(Data);
  return (
    // SELECTION CARD
    <div>
      <div className="row">
        {Data.map((user) => {
          console.log(user);
          return (
            <div className="col-sm-4 col-lg-4 col-md-4 " key={user.id}>
              <div
                className="card"
                style={{
                  marginTop: "10px",
                  boxShadow: "20px 20px 40px black",
                }}
              >
                <div style={{ backgroundColor: "rgb(213,238,240)" }}>
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
                <div className="card-body" style={{ textAlign: "center" }}> 
                  <h4 className="card-title" style={{ backgroundColor: "rgb(213,238,240)" }}>{user.name}</h4>
                  <hr />
                  <Link to={user.bathname} className="btn btn-success">
                    Click Me
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br/>
                  <Foot/>
    </div>
  );
}
