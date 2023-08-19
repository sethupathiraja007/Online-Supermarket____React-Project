import React from "react";
import Welcome from "./Welcome.js";
import Nav from "./Nav.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav2 from "./Nav2.js";
import Carousal1 from "./Carousal1.js";
import Carousal2 from "./Carousal2.js";
import Cardloop from "./Cardloop.js";
import Fruitscard from "./Fruitscard.js";
import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";
import Home from "./Home.js";
import Newcard from "./Newcard.js";
import Add from "./Add.js";
import Heart from "./Heart.js";
import Cart from "./Cart.js";
import Foot from "./Foot.js";

export default function Layout() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/nav" element={<Nav />}></Route>
          <Route path="/nav2" element={<Nav2 />}></Route>
          <Route path="/carousal1" element={<Carousal1 />}></Route>
          <Route path="/carousal2" element={<Carousal2 />}></Route>
          <Route path="/cardloop" element={<Cardloop />}></Route>
          <Route path="/fruitscard" element={<Fruitscard />}></Route>
          <Route path="/card1" element={<Card1 />}></Route>
          <Route path="/card2" element={<Card2 />}></Route>
          <Route path="/card3" element={<Card3 />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/newcard" element={<Newcard />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/heart" element={<Heart />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/foot" element={<Foot />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
