import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="neo__footer section__padding">
      <div className="neo__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the world of crypto ?
        </h1>
      </div>

      <div className="neo__footer-btn">
        <p>Signup for Newsletter </p>
      </div>

      <div className="neo__footer-links">
        <div className="neo__footer-links_logo">
          {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
          <h1>NEO</h1>
          <p>
            Address k12 XYZ, <br /> All Rights Reserved
          </p>
        </div>
        <div className="neo__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="neo__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="neo__footer-links_div">
          <h4>Get in touch</h4>
          <p>Address k12 XYZ</p>
          <p>091-132567</p>
          <p>info@neo.net</p>
        </div>
      </div>

      <div className="neo__footer-copyright">
        <p>@2022 NEO. All rights reserved.</p>
      </div>
    </div>
  );
}
