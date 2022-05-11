import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";

export default function CTA() {
  return (
    <div className="neo_cta section__padding">
      <div className="neo__cta-heading">
        <h1 className="gradient__text">See Exchange Rates and Market Prices</h1>
      </div>
      <div className="neo__cta-btn">
        <button>
          <Link to="exchangerates">See Exchange rates</Link>
        </button>
      </div>
    </div>
  );
}
