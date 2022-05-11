import React from "react";
import blockchain from "../../assets/blockchain.jpg";
import "./header.css";

export default function Header() {
  return (
    <div className="neo__header section__padding" id="home">
      <div className="neo__header-content">
        <h1 className="gradient__text">
          Bitcoin Explained. Explore our Blogs!
        </h1>
        <p>
          Stories from the world’s leading digital asset platform where you have
          full control of your crypto.
        </p>

        <div className="neo__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
      </div>

      <div className="neo__header-image">
        <img src={blockchain} />
      </div>
    </div>
  );
}
