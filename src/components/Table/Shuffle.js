import React from "react";
import "./Shuffle.scss";
import PropTypes from "prop-types";

// Renders a button which upon user click triggers a shuffle action which causes a random combination of items to be selected
// Renders text which tracks the number of combinations of user has explored and how many unique combinations there are.
const Shuffle = ({
  handleShuffle,
  exploredPossibilities,
  numPossibilities,
}) => {
  return (
    <div className="shuffle">
      <button onClick={handleShuffle}>Shuffle</button>
      <p>
        <span>{exploredPossibilities}</span> combinations explored. There are{" "}
        <span>{numPossibilities}</span> possible unique combinations.
      </p>
    </div>
  );
};

Shuffle.propTypes = {
  handleShuffle: PropTypes.func,
  exploredPossibilities: PropTypes.number,
  numPossibilities: PropTypes.number,
};

export default Shuffle;
