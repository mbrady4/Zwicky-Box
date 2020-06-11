import React from "react";
import "./Reset.scss";
import PropTypes from "prop-types";

// Renders a button which upon user click resets triggers an action which resets the app to initial state
const Reset = ({ resetItems }) => {
  return (
    <button className="reset" onClick={() => resetItems()}>
      Clear and reset
    </button>
  );
};

Reset.propTypes = {
  resetItems: PropTypes.func,
};

export default Reset;
