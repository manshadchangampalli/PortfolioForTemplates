import React from "react";
import Button from "../Button/Button";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
          <h2><span>P</span>ortfolio</h2>
      </div>
      <div className="nav-item">
          <div className="navs" >
            <p>Home</p>
            <p>About Us</p>
            <p>Servieces</p>
            <div>
                <Button name="Contact Us"/>
            </div>
            
          </div>
      </div>
    </div>
  );
}

export default Navbar;
