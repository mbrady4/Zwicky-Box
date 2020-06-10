import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import "./Item.scss";

// A controlled component which renders an input field with a provided value
// Allows value to be updated by user, on hover renders a delete button which triggers a delete item action
const Item = ({
  item,
  categoryIndex,
  itemIndex,
  selected,
  deleteItem,
  editItem,
}) => {
  // state to control value of input field
  const [value, setValue] = useState(item);
  // state to toggle if delete button should be shown (shows if mouse is present)
  const [isMouseHere, setIsMouseHere] = useState(false);

  // handle input field changes
  const handleChanges = (e) => {
    setValue(e.target.value);
  };

  // on loss of focus trigger an action to update the store with the latest item value
  const loseFocus = (e) => {
    editItem(categoryIndex, itemIndex, e.target.value);
  };

  // on 'enter' press trigger a loss of focus and an action to update the sotre with the latest item value
  const keyPressHandler = (e) => {
    if (e.keyCode === 13) {
      editItem(categoryIndex, itemIndex, value);
      e.target.blur();
    }
  };

  // when a user clicks on the delete icon, trigger an action to delete the item
  const onDeleteClick = (e) => {
    deleteItem(categoryIndex, itemIndex);
  };

  return (
    <div
      onMouseEnter={() => setIsMouseHere(true)}
      onMouseLeave={() => setIsMouseHere(false)}
      className={selected ? "selected item" : "item"}
    >
      <input
        type="text"
        value={value}
        onChange={handleChanges}
        onKeyDown={keyPressHandler}
        onBlur={loseFocus}
      />
      {isMouseHere ? (
        <FontAwesomeIcon
          className="trash"
          icon={faTrash}
          onClick={() => onDeleteClick()}
        />
      ) : null}
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.string,
  categoryIndex: PropTypes.number,
  itemIndex: PropTypes.number,
  selected: PropTypes.bool,
  deleteItem: PropTypes.object,
  editItem: PropTypes.object,
};

export default Item;
