import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import Item from "./Item";

import "./Category.scss";

// Renders a category title (as an input field) and its associated items (through a child prop)
// Allows for a users to edit and delete a category
// Allows users to add items to a category
const Category = ({
  category,
  categoryIndex,
  addItem,
  deleteItem,
  deleteCategory,
  updateCategory,
  editItem,
}) => {
        // state to control new item input field value
        const [value, setValue] = useState("");
        // state to control category title and input field value
        const [categoryTitle, setCategory] = useState(category.category);
        // state to control if delete icon should be shown
        const [isMouseHere, setIsMouseHere] = useState(false);

        // handle changes to add item input field
        const handleChanges = (e) => {
          setValue(e.target.value);
        };

        // handle changes to category item input field
        const handleCategoryChange = (e) => {
          setCategory(e.target.value);
        };

        // on 'enter' press trigger a loss of focus and an action to update the sotre with the latest item value
        const keyPressHandler = (e) => {
          if (e.keyCode === 13) {
            updateCategory(categoryIndex, categoryTitle);
            e.target.blur();
          }
        };

        // handle submit on add new item field, triggers action to add new item to the category
        const handleSubmit = (e) => {
          e.preventDefault();
          addItem(categoryIndex, value);
          setValue("");
        };

        // triggers action to delete the category
        const onDeleteClick = () => {
          deleteCategory(categoryIndex);
        };

        return (
          <div className="category">
            <div
              onMouseEnter={() => setIsMouseHere(true)}
              onMouseLeave={() => setIsMouseHere(false)}
            >
              <input
                className="category-title"
                type="text"
                value={categoryTitle}
                onChange={handleCategoryChange}
                onKeyDown={keyPressHandler}
              />
              {isMouseHere ? (
                <FontAwesomeIcon
                  className="trash"
                  icon={faTrash}
                  onClick={() => onDeleteClick()}
                />
              ) : null}
            </div>
            {category.items.map((item, key) => {
              return (
                <Item
                  key={key}
                  categoryIndex={categoryIndex}
                  itemIndex={key}
                  item={item}
                  selected={category.selected === key ? true : false}
                  deleteItem={deleteItem}
                  editItem={editItem}
                />
              );
            })}
            <form onSubmit={handleSubmit}>
              <input
                className="add-item"
                type="text"
                placeholder="add item"
                value={value}
                onChange={handleChanges}
              />
            </form>
          </div>
        );
      };

Category.propTypes = {
  category: PropTypes.object,
  categoryIndex: PropTypes.number,
  addItem: PropTypes.object,
  deleteItem: PropTypes.object,
  deleteCategory: PropTypes.object,
  updateCategory: PropTypes.object,
  editItem: PropTypes.object
};

export default Category;
