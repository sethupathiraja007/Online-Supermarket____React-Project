import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import Nav2 from "./Nav2";
import img from "./sl1.png";
import Foot from "./Foot";

export default function Cart() {
  //user name and detail
  const dataa = JSON.parse(sessionStorage.getItem("values"));
  console.log(dataa);
  var result = dataa.toUpperCase();

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [newdatas, setNewdatas] = useState(() => {
    const storedData = JSON.parse(sessionStorage.getItem("veg"));
    return Array.isArray(storedData)
      ? storedData.map((product) => ({ ...product, quantity: 1 }))
      : [];
  });
  

  // Function to handle increasing the quantity
  const handleIncreaseQuantity = (index) => {
    const updatedData = [...newdatas];
    updatedData[index].quantity += 1;
    setNewdatas(updatedData);
  };

  // Function to handle decreasing the quantity
  const handleDecreaseQuantity = (index) => {
    const updatedData = [...newdatas];
    if (updatedData[index].quantity > 0) {
      updatedData[index].quantity -= 1;
      setNewdatas(updatedData);
    }
  };

  const handleBuyNow = () => {
    setNewdatas([]);
    setIsButtonClicked(true);
    sessionStorage.removeItem("veg");
  };

  
  // Calculate the total price of all items in the cart
  const cartTotal = newdatas.reduce(
    (total, item) => total + item.quantity * item.detail,
    0
  );

  const tableData = {
    columns: [
      {
        label: "Product Image",
        field: "image",
        sort: "asc",
        width: 200,
      },
      {
        label: "Product Name",
        field: "name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Product Price",
        field: "detail",
        sort: "asc",
        width: 200,
      },
      {
        label: "Product Quantity/KG",
        field: "quantity",
        sort: "asc",
        width: 200,
      },
      {
        label: "Total Price",
        field: "totalPrice",
        sort: "asc",
        width: 200,
      },
      {
        label: "Buy Now",
        field: "buyNow",
        sort: "asc",
        width: 200,
      },
    ],
    rows: newdatas.map((row, index) => ({
      image: (
        <img
          src={row.image}
          alt={row.name}
          style={{ width: "100px", height: "100px" }}
        />
      ),
      name: row.name,
      detail: <div>Price ₹{row.detail}.</div>,
      quantity: (
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button
            className="btn btn-danger"
            onClick={() => handleDecreaseQuantity(index)}
          >
            -
          </button>
          {row.quantity}/kg
          <button
            className="btn btn-success"
            onClick={() => handleIncreaseQuantity(index)}
          >
            +
          </button>
        </div>
      ),
      totalPrice: <div>Price ₹ {row.quantity * row.detail}.</div>,
      buyNow: (
        <div>
          {" "}
          <button
            data-bs-toggle="modal"
            data-bs-target="#myModal2"
            className="btn btn-primary"
          >
            Buy Now
          </button>
          {/* <!-- The Modal --> */}
          <div class="modal" id="myModal2">
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
                <div class="modal-body">
                  <div>
                    {" "}
                    Hi Our Customer {result} ,Your purchase totalPrice is ₹ {cartTotal}.
                  </div>

                  <div>
                    {" "}
                    <button
                      style={{ width: "50%" }}
                      type="button"
                      class="btn btn-success"
                      onClick={handleBuyNow}
                    >
                      Pay
                    </button>
                  </div>
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
        </div>
      ),
    })),
  };

  return (
    <div style={{ paddingBottom: "200px" }}>
      <div>
        <Nav2 />
        <div>
          {isButtonClicked ? (
            <div
              className="container"
              style={{
                alignItems: "center",
                backgroundColor: "rgb(213,238,240)",
                marginTop: "100px",
                height: "200px",
                width: "100%",
              }}
            >
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
              <div>
                <h2>
                  Congratulations! {result}. Your Payment Amount has been recived.
                </h2>
              </div>
              <br />
              <div>
                <h3>Thank you for shopping with ROLEX MARKET.</h3>
              </div>
            </div>
          ) : (
            <div className="container">
              <MDBDataTable striped bordered hover data={tableData}  noBottomColumns />
              <div style={{ textAlign: "right", marginTop: "20px" }}>
                <strong>Total Price: ₹{cartTotal.toFixed(2)}</strong>
              </div>
              {/* Rest of the code */}
            </div>
          )}
        </div>
      </div>
<br/>
<Foot/>
    </div>
  );
}
