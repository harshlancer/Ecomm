import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./Logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="logoImage" src={Logo} alt="logo"></img>
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Search "></input>

        <button type="submit"> search</button>
      </div>

      <div className="links">
        <Link className="linkText" to="/profile">
          Profile
        </Link>
        <Link className="linkText" to="/Cart">
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
