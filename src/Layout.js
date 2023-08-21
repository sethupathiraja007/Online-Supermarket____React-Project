// Import necessary libraries and components
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
import Meat from "./Meat.js";

// Define the Layout component
export default function Layout() {
  // Return JSX markup for the component's render method
  return (
    <div>
      {/* Set up the Router */}
      <Router>
        {/* Define Routes */}
        <Routes>
          {/* Define a route for the Welcome component */}
          <Route
            exact
            path="/Online-Supermarket____React-Project"
            element={<Welcome />}
          ></Route>
          {/* Define a route for the Nav component */}
          <Route path="/nav" element={<Nav />}></Route>
          {/* Define a route for the Nav2 component */}
          <Route path="/nav2" element={<Nav2 />}></Route>
          {/* Define a route for the Carousal1 component */}
          <Route path="/carousal1" element={<Carousal1 />}></Route>
          {/* Define a route for the Carousal2 component */}
          <Route path="/carousal2" element={<Carousal2 />}></Route>
          {/* Define a route for the Cardloop component */}
          <Route path="/cardloop" element={<Cardloop />}></Route>
          {/* Define a route for the Fruitscard component */}
          <Route path="/fruitscard" element={<Fruitscard />}></Route>
          {/* Define a route for the Card1 component */}
          <Route path="/card1" element={<Card1 />}></Route>
          {/* Define a route for the Card2 component */}
          <Route path="/card2" element={<Card2 />}></Route>
          {/* Define a route for the Card3 component */}
          <Route path="/card3" element={<Card3 />}></Route>
          {/* Define a route for the Home component */}
          <Route path="/home" element={<Home />}></Route>
          {/* Define a route for the Newcard component */}
          <Route path="/newcard" element={<Newcard />}></Route>
          {/* Define a route for the Add component */}
          <Route path="/add" element={<Add />}></Route>
          {/* Define a route for the Heart component */}
          <Route path="/heart" element={<Heart />}></Route>
          {/* Define a route for the Cart component */}
          <Route path="/cart" element={<Cart />}></Route>
          {/* Define a route for the Foot component */}
          <Route path="/foot" element={<Foot />}></Route>
          {/* Define a route for the Meat component */}
          <Route path="/meat" element={<Meat />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
