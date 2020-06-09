import { UPDATE_ITEM, 
         SHUFFLE, 
         RESET_ITEMS, 
         SAVE_COMBO, 
         UPDATE_SAVED_COMBOS,
         SET_MARKETING_STATE,
         SET_LIVING_STATE } from '../actions/action';
import { initialState } from '../data/exampleData';

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_ITEM:
            return Object.assign({}, state, {
                table: action.payload.table,
                numPossibilities: action.payload.numPossibilities
            })
        case SHUFFLE:
            return Object.assign({}, state, {
                table: action.payload.table,
                exploredPossibilities: action.payload.exploredPossibilities,
                hasShuffled: action.payload.hasShuffled
            })
        case SAVE_COMBO:
            const key = Object.keys(state.savedCombos).length;
            return Object.assign({}, state, {
                savedCombos: {
                    ...state.savedCombos,
                    [key] : action.payload
                }
            });
        case RESET_ITEMS:
            return action.payload;
        case SET_MARKETING_STATE:
            return action.payload;
        case SET_LIVING_STATE:
            return action.payload;
        case UPDATE_SAVED_COMBOS:
            return Object.assign({}, state, {
                savedCombos: action.payload.updatedCombos
            });
        default:
            return state;
    }
};