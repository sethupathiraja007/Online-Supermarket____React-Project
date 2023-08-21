import React from "react";
import Carousal1 from "./Carousal1";
import Nav2 from "./Nav2";
import Newcard from "./Newcard";

export default function Home() {
  return (
    <div>
      <Nav2 />
      <Carousal1 />
      <br />

      <div className="container-fluid">
        <Newcard />
      </div> 
    
    </div>
  );
}
