import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "./sl1.png";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const navigate = useNavigate();
  const userdata = [
    {
      id: 1,
      username: "sethu",
      password: "123",
      email: "email",
      age: "23",
    },
  ];

  const [user, setUser] = useState(userdata);

  console.log(user);

  // singin
  const initial = {
    id: null,
    username: "",
    password: "",
    email: "",
    age: "",
  };
  const [state, setState] = useState(initial);
  console.log(state);

  const newuserdata = () => {
    setState((stat) => {
      return { ...stat, id: user.length + 1 };
    });
    console.log(state);
    setUser([...user, state]);
  };

  const click = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const singin = (event) => {
    event.preventDefault();
    if (!state.username || !state.password) return;
    newuserdata();
  };

  //login
  const [state1, setState1] = useState({ Username: "", Password: "" });
  sessionStorage.setItem("values", JSON.stringify(state1.Username));
  var string = JSON.stringify(state1);
  console.log(string);
  console.log(state1.Username);
  const click1 = (event) => {
    const { name, value } = event.target;
    setState1({ ...state1, [name]: value });

  };
  const login = (e) => {
    e.preventDefault();

    const find = user.find(
      ({ username, password }) =>
        username === state1.Username && password === state1.Password
    );
    console.log(find);
    if (find !== undefined) {
      navigate("/home");
    } else {
      alert("not valid");
      setState1({ ...state1, Username: "", Password: "" });
    }
  };

  return (
    <>
      {/* NAV BAR */}
      <nav className="navbar navbar-expand-sm sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src={img}
              alt="Logo"
              style={{ width: "60px" }}
              className="rounded-pill"
            />
            <span id="super">
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
            <div className="collapse navbar-collapse " id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item " style={{ listStyleType: "none" }}>
                  <a className="nav-link">
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      style={{ padding: "3px" }}
                    >
                      <FontAwesomeIcon icon={faRightToBracket} /> LOGIN
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal fade" id="myModal">
            <div className="modal-dialog" style={{ textAlign: "center" }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">LOGIN</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <form onSubmit={(e) => login(e)}>
                  <div className="modal-body">
                    <label
                      style={{
                        fontSize: "25px",
                        width: "250px",
                        height: "30px",
                        textAlign: "initial",
                      }}
                    >
                      USERNAME
                    </label>
                    <br></br>
                    <input
                      type="text"
                      onChange={click1}
                      name="Username"
                      value={state1.Username}
                      placeholder="username"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        backgroundColor: "none",
                        outline: "0",
                        fontSize: "15px",
                        width: "250px",
                        height: "30px",
                      }}
                    ></input>
                    <br></br>
                    <label
                      style={{
                        marginTop: "5px",
                        fontSize: "25px",
                        width: "250px",
                        height: "30px",
                        textAlign: "initial",
                      }}
                    >
                      PASSWORD
                    </label>
                    <br></br>
                    <input
                      type="password"
                      onChange={click1}
                      name="Password"
                      placeholder="password"
                      value={state1.Password}
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        backgroundColor: "none",
                        outline: "0",
                        fontSize: "15px",
                        width: "250px",
                        height: "30px",
                      }}
                    ></input>
                    <br></br>
                    <button
                      type="submit"
                      className="btn btn-primary "
                      data-bs-dismiss="modal"
                      style={{ marginTop: "10px" }}
                    >
                      LOGIN
                    </button>
                  </div>
                  <div className="modal-footer">
                    <h6>Don't have an account</h6>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal1"
                    >
                      SIGN UP
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="modal fade" id="myModal1">
            <div className="modal-dialog" style={{ textAlign: "center" }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">SING UP</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <form onSubmit={(e) => singin(e)}>
                  <div className="modal-body">
                    <label
                      style={{
                        marginTop: "5px",
                        fontSize: "25px",
                        width: "250px",
                        height: "30px",
                        textAlign: "initial",
                      }}
                    >
                      USERNAME
                    </label>
                    <br></br>
                    <input
                      type="text"
                      placeholder="username"
                      onChange={click}
                      name="username"
                      value={state.username}
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        backgroundColor: "none",
                        outline: "0",
                        fontSize: "15px",
                        width: "250px",
                        height: "30px",
                      }}
                    ></input>
                    <br></br>
                    <label
                      style={{
                        marginTop: "5px",
                        fontSize: "25px",
                        width: "250px",
                        height: "30px",
                        textAlign: "initial",
                      }}
                    >
                      PASSWORD
                    </label>
                    <br></br>
                    <input
                      type="password"
                      onChange={click}
                      placeholder="password"
                      name="password"
                      value={state.password}
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        backgroundColor: "none",
                        outline: "0",
                        fontSize: "15px",
                        width: "250px",
                        height: "30px",
                      }}
                    ></input>
                    <br></br>
                    <label
                      style={{
                        marginTop: "5px",
                        fontSize: "25px",
                        width: "250px",
                        height: "30px",
                        textAlign: "initial",
                      }}
                    >
                      EMAIL
                    </label>
                    <br></br>
                    <input
                      type="text"
                      onChange={click}
                      name="email"
                      placeholder="email"
                      value={state.email}
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        backgroundColor: "none",
                        outline: "0",
                        fontSize: "15px",
                        width: "250px",
                        height: "30px",
                      }}
                    ></input>
                    <br></br>
                    <label
                      style={{
                        marginTop: "5px",
                        fontSize: "25px",
                        width: "250px",
                        height: "30px",
                        textAlign: "initial",
                      }}
                    >
                      AGE
                    </label>
                    <br></br>
                    <input
                      type="number"
                      onChange={click}
                      name="age"
                      placeholder="age"
                      value={state.age}
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        backgroundColor: "none",
                        outline: "0",
                        fontSize: "15px",
                        width: "250px",
                        height: "30px",
                      }}
                    ></input>
                    <br></br>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                      data-bs-target="#myModal"
                      style={{ marginTop: "10px" }}
                    >
                      REGISTER
                    </button>
                  </div>
                </form>
                <div className="modal-footer">
                  <h6> Already you have account</h6>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    data-bs-target="#myModal"
                  >
                    LOGIN
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
