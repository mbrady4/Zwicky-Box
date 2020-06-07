import { UPDATE_ITEM, SHUFFLE, RESET_ITEMS, SAVE_COMBO, UPDATE_SAVED_COMBOS } from '../actions/action';

const initialState = {
    table: {
         '1': {
             category: 'Category 1',
             items: ['Item 1', 'Item 2', 'Item 3'],
             selected: null
         },
         '2': {
            category: 'Category 2',
            items: ['Item 1', 'Item 2', 'Item 3'],
            selected: null
        },
        '3': {
            category: 'Category 3',
            items: ['Item 1', 'Item 2', 'Item 3'],
            selected: null
        },
    },
    numPossibilities: 27,
    exploredPossibilities: 0,
    savedCombos: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_ITEM:
            console.log('updated Item on Reducer');
            console.log(action.payload);
            return Object.assign({}, state, {
                table: action.payload.table,
                numPossibilities: action.payload.numPossibilities
            })
        case SHUFFLE:
            return Object.assign({}, state, {
                table: action.payload.table,
                exploredPossibilities: action.payload.exploredPossibilities
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
        case UPDATE_SAVED_COMBOS:
            return Object.assign({}, state, {
                savedCombos: action.payload.updatedCombos
            });
        default:
            return state;
    }
};