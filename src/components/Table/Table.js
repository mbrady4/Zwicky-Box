import React from "react";
import { connect } from "react-redux";

import Category from "./Category";
import Shuffle from "./Shuffle";
import Reset from "./Reset";
import CurrentCombo from "./CurrentCombo";
import SavedCombos from "./SaveCombos";

import {
  updateItem,
  shuffleItems,
  resetItems,
  saveCombo,
  updatedSavedCombos,
} from "../../actions/action";
import { removeByKey } from "../../utils/helperFunctions";
import "./Table.scss";
 
// Connected to the store, passes state down to child components
// Renders the Zwicky Box table (shuffle, current combos, saved combos, the table itself, and reset)
const Table = ({
  table,
  numPossibilities,
  exploredPossibilities,
  savedCombos,
  hasShuffled,
  updateItem,
  shuffleItems,
  resetItems,
  saveCombo,
  updatedSavedCombos,
}) => {
  // get the number of categoeries in the table
  const keys = Object.keys(table);

  // updates table based on input and triggers an action to update the store
  const editItem = (categoryIndex, itemIndex, newValue) => {
    let categoryToUpdate = table[categoryIndex];
    categoryToUpdate.items[itemIndex] = newValue;
    const updatedTable = {
      ...table,
      [categoryIndex]: categoryToUpdate,
    };
    updateItem(updatedTable);
  };

  // adds an item to the appropriate category within a copy of the table object and triggers an action to update the store
  const addItem = (categoryIndex, newItem) => {
    const categoryToUpdate = table[categoryIndex];
    categoryToUpdate.items.push(newItem);
    const updatedTable = {
      ...table,
      [categoryIndex]: categoryToUpdate,
    };
    updateItem(updatedTable);
  };

  // deletes an item from a copy of the table object and triggers an action to update the store
  const deleteItem = (categoryIndex, itemIndex) => {
    let categoryToUpdate = table[categoryIndex];
    categoryToUpdate.items.splice(itemIndex, 1);
    const updatedTable = {
      ...table,
      [categoryIndex]: categoryToUpdate,
    };
    updateItem(updatedTable);
  };

  // delets a category from a copy of the table object and triggers an action to update the store
  const deleteCategory = (categoryIndex) => {
    const updatedTable = removeByKey(table, categoryIndex);
    updateItem(updatedTable);
  };

  // updates the title of a category within a the appropriate category and triggers an action to update the store
  const updateCategory = (categoryIndex, value) => {
    let categoryToUpdate = table[categoryIndex];
    categoryToUpdate.category = value;
    const updatedTable = {
      ...table,
      [categoryIndex]: categoryToUpdate,
    };
    updateItem(updatedTable);
  };

  // adds a category with the appropriate key to a copy of the table object and triggers an action to update the store
  const addCategory = () => {
    const key = keys.length + 1;
    const initialCat = {
      category: "Category " + key,
      items: ["Item 1", "Item 2", "Item 3"],
      selected: null,
    };
    const updatedTable = {
      ...table,
      [key]: initialCat,
    };
    updateItem(updatedTable);
  };

  // triggers a shuffle action
  const handleShuffle = () => {
    shuffleItems(table, exploredPossibilities);
  };

  // delete a combination from the savedCombos object and triggers an action to update the store
  const deleteCombo = (id) => {
    const updatedCombos = removeByKey(savedCombos, id);
    console.log("updated combos,", updatedCombos);
    const key = Object.keys(savedCombos).length;
    updatedSavedCombos(updatedCombos, key);
  };

  return (
    <div>
      {/* Render the shuffle component */}
      <Shuffle
        handleShuffle={handleShuffle}
        exploredPossibilities={exploredPossibilities}
        numPossibilities={numPossibilities}
      />
      {/* Only show if the user has clicked the shuffle button */}
      {hasShuffled ? (
        <div>
          <h3>Current Combination</h3>
          <CurrentCombo keys={keys} table={table} saveCombo={saveCombo} />
        </div>
      ) : null}
      {/* Only show if the user has saved a combination */}
      {Object.keys(savedCombos).length > 0 ? (
        <div>
          <h3>Saved Combinations</h3>
          <SavedCombos savedCombos={savedCombos} deleteCombo={deleteCombo} />
        </div>
      ) : null}
      {/* Render the Zwicky Table based on the table state in the store */}
      <h3>Zwicky Table</h3>
      <div className="table">
        {keys.map((category, key) => {
          return (
            <Category
              category={table[category]}
              key={category}
              categoryIndex={category}
              addItem={addItem}
              editItem={editItem}
              deleteItem={deleteItem}
              deleteCategory={deleteCategory}
              updateCategory={updateCategory}
            />
          );
        })}
        <button className="add-category" onClick={addCategory}>
          +
        </button>
      </div>
      {/* Render a reset button to return the app and store to the initial state */}
      <Reset resetItems={resetItems} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    table: state.table,
    numPossibilities: state.numPossibilities,
    exploredPossibilities: state.exploredPossibilities,
    savedCombos: state.savedCombos,
    hasShuffled: state.hasShuffled,
  };
};

export default connect(mapStateToProps, {
  updateItem,
  shuffleItems,
  resetItems,
  saveCombo,
  updatedSavedCombos,
})(Table);
