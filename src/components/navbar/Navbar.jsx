import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="neo__navbar">
      <div className="neo__navbar-links">
        <div className="neo__navbar-links_logo">
          {/* <img src={Logo} alt="logo"   /> */}
          <h2 style={{ color: "white" }}>NEO</h2>
        </div>
        <div className="neo__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#blog"></a>Blog
          </p>
          <p>
            <Link to="exchangerates">Exchange Rates</Link>
          </p>
          <p>
            <a href="#home"></a>Info
          </p>
        </div>
      </div>
      <div className="neo__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="neo__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="neo__navbar-menu_container scale-up-center">
            <div className="neo__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#home"></a>Blog
              </p>
              <p>
                <a href="#home"></a>info
              </p>
              <p>
                <a href="#home"></a>dekhenge
              </p>
            </div>
            <div className="neo__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
