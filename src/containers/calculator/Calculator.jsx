import React, { useEffect, useState } from "react";
import "./calculator.css";

/* 
Calculator to convert Currency value to Bitcoin
*/

export default function Calculator() {
  const [data, setData] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [number, setNumber] = useState("");

  useEffect(() => {
    fetch(`https://blockchain.info/tobtc?currency=${currency}&value=${number}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, [currency, number]);

  return (
    <div className="neo__calci section__padding">
      <div className="neo__cta-heading">
        <h1 className="gradient__text">Convert to BTC Calculator</h1>
      </div>
      <div className="neo__calci-form">
        <form>
          <label>
            <p>Choose Currency</p>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CNY</option>
              <option value="DKK">DKK</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="KRW">KRW</option>
              <option value="NZD">NZD</option>
              <option value="PLN">PLN</option>
              <option value="RUB">RUB</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
            </select>
          </label>
          <label>
            <p>Input the Value</p>
            <input
              type="number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <h1 className="gradient__text">The value in Bitcoin is {data}</h1>
        </form>
      </div>
    </div>
  );
}
