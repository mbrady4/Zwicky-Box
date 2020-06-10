import { initialState, marketingState, livingState } from "../data/exampleData";
import { getRandomInt, possibilityCount } from "../utils/helperFunctions";

// Action Types
export const UPDATE_ITEM = "UPDATE_ITEM";
export const SHUFFLE = "SHUFFLE";
export const RESET_ITEMS = "RESET_ITEMS";
export const SAVE_COMBO = "SAVE_COMBO";
export const UPDATE_SAVED_COMBOS = "UPDATE_SAVED_COMBOS";
export const SET_MARKETING_STATE = "SET_MARKETING_STATE";
export const SET_LIVING_STATE = "SET_LIVING_STATE";

// Replaces current table state with updated table provided as input
// Updates numPossibilities state based on updated table
export const updateItem = (updatedTable) => {
  // utility function to get unique possibility count for updated table
  const possibilities = possibilityCount(updatedTable);
  return {
    type: UPDATE_ITEM,
    payload: {
      table: updatedTable,
      numPossibilities: possibilities,
    },
  };
};

// Generates a random shuffle of the provided table
// Increments number of explored possibilities
// Toggles the hasShuffled state
export const shuffleItems = (table, exploredPossibilities) => {
  // create copy of table to avoid mutating provided table
  let updatedTable = table;
  // map over each category of table and randomly select an item in each category
  Object.keys(updatedTable).forEach((key, index) => {
    let len = updatedTable[key].items.length;
    const ranInt = getRandomInt(0, len - 1);
    updatedTable[key] = {
      ...updatedTable[key],
      selected: ranInt,
    };
  });

  return {
    type: SHUFFLE,
    payload: {
      table: updatedTable,
      hasShuffled: true,
      exploredPossibilities: exploredPossibilities + 1,
    },
  };
};

// resets the app to the initialState
export const resetItems = () => {
  return {
    type: RESET_ITEMS,
    payload: initialState,
  };
};

// Saves the updated saved combos object to the store
// key designates the unique id of the new saved combo
export const updatedSavedCombos = (updatedSavedCombos, key) => {
  return {
    type: UPDATE_SAVED_COMBOS,
    payload: {
      updatedCombos: updatedSavedCombos,
      key: key,
    },
  };
};

// Accepts an array of categories and items to save as a combo
export const saveCombo = (categories, items) => {
  return {
    type: SAVE_COMBO,
    payload: {
      categories: categories,
      items: items,
    },
  };
};

// Replaces the current state with the marketing table example
export const setMarketingExample = () => {
  return {
    type: SET_MARKETING_STATE,
    payload: marketingState,
  };
};

// Replaces the current state with the living table example
export const setLivingExample = () => {
  return {
    type: SET_LIVING_STATE,
    payload: livingState,
  };
};
