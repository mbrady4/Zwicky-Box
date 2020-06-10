import React, { useState } from "react";
import { connect } from "react-redux";
import { setMarketingExample, setLivingExample } from "../..//actions/action";
import { v4 as uuidv4 } from "uuid";
import { Redirect } from "react-router-dom";

import "./Examples.scss";
// Component that renders the example Zwicky boxes that users can get started with
const Examples = (setMarketingExample, setLivingExample) => {
  // hard-coded data related to the example Zwicky boxes
  const examples = ["Marketing Strategies", "Places to live"];
  const images = ["marketingExample.png", "livingExample.png"];
  // state to toggle redirect to home page
  const [toTable, setToTable] = useState(false);

  // click handler to toggle redirect state on user click
  // also triggers appropriate action based on user click key
  const clickHandler = (i) => {
    if (i === 0) {
      setMarketingExample();
    } else {
      setLivingExample();
    }
    setToTable(true);
  };

  return (
    <div className="examples">
      {/* Redirect to homepage if true */}
      {toTable ? <Redirect to="/" /> : null}
      <h1>Example Zwicky Boxes</h1>
      <p>Click an example to explore it.</p>
      {examples.map((example, i) => {
        return (
          <div
            className="example"
            onClick={() => clickHandler(i)}
            key={uuidv4()}
          >
            <div className="overlay">
              <h2>{example}</h2>
              <img src={images[i]} alt={example} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(null, { setMarketingExample, setLivingExample })(
  Examples
);
