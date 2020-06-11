import {
  UPDATE_ITEM,
  SHUFFLE,
  RESET_ITEMS,
  SAVE_COMBO,
  UPDATE_SAVED_COMBOS,
  SET_MARKETING_STATE,
  SET_LIVING_STATE,
} from "../actions/action";
import { initialState } from "../data/exampleData";
import { v4 as uuidv4 } from "uuid";

export default (state = initialState, action) => {
  switch (action.type) {
    // Update the table in the store
    case UPDATE_ITEM:
      return Object.assign({}, state, {
        table: action.payload.table,
        numPossibilities: action.payload.numPossibilities,
      });

    // Update the store with the latest shuffled items
    case SHUFFLE:
      return Object.assign({}, state, {
        table: action.payload.table,
        exploredPossibilities: action.payload.exploredPossibilities,
        hasShuffled: action.payload.hasShuffled,
      });

    // add a new combo to the saved combos in the store
    case SAVE_COMBO:
      // const key = Object.keys(state.savedCombos).length;
      const key = uuidv4();
      return Object.assign({}, state, {
        savedCombos: {
          ...state.savedCombos,
          [key]: action.payload,
        },
      });

    // reset store to initial state
    case RESET_ITEMS:
      return action.payload;

    // load the marketing example to the store
    case SET_MARKETING_STATE:
      return action.payload;

    // Load the living example to the store
    case SET_LIVING_STATE:
      return action.payload;

    // Update the save combinations state in the store
    case UPDATE_SAVED_COMBOS:
      return Object.assign({}, state, {
        savedCombos: action.payload.updatedCombos,
      });

    // return the current store
    default:
      return state;
  }
};
