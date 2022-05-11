import React, { useEffect, useState } from "react";
import "./exchangeRateData.css";

export default function ExchangeRateData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://blockchain.info/ticker`)
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
    //   console.log(data)
  }, []);

  let resultData = [];
  for (var i in data) resultData.push([i, data[i]]);
  console.log(resultData);

  return (
    <div className="neo__exchange section__padding">
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="neo__cta-heading">
        <h1 className="gradient__text">Exchange Rates and Market Prices</h1>
      </div>
      {resultData.map((result, index) => (
        <div key={index} className="neo__exchange-table">
          <table>
            <thead>
              <tr>
                <th>{result[0]}</th>
                {/* <th>last</th> */}
                <th>buy</th>
                {/* <th>sell</th> */}
                <th>symbol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                {/* <td>{result[1].last}</td> */}
                <td>{result[1].buy}</td>
                {/* <td>{result[1].sell}</td> */}
                <td>{result[1].symbol}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
