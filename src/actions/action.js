import { initialState, marketingState, livingState} from '../data/exampleData';
import { getRandomInt, possibilityCount } from '../utils/helperFunctions';

export const UPDATE_ITEM = "UPDATE_ITEM";
export const SHUFFLE = "SHUFFLE";
export const RESET_ITEMS = "RESET_ITEMS";
export const SAVE_COMBO = "SAVE_COMBO";
export const UPDATE_SAVED_COMBOS = "UPDATE_SAVED_COMBOS";
export const SET_MARKETING_STATE = "SET_MARKETING_STATE";
export const SET_LIVING_STATE = "SET_LIVING_STATE";

export const updateItem = (updatedTable) => {
    const possibilities = possibilityCount(updatedTable);
    return {
        type: UPDATE_ITEM,
        payload: {
            table: updatedTable,
            numPossibilities: possibilities
        }
    }
};

export const shuffleItems = (table, exploredPossibilities) => {
    let updatedTable = table;
    Object.keys(updatedTable).forEach( (key, index) => {
        let len = updatedTable[key].items.length;
        const ranInt = getRandomInt(0,len-1);
        updatedTable[key] = {
            ...updatedTable[key],
            selected: ranInt
        }
    })
    
    return {
        type: SHUFFLE,
        payload: { table: updatedTable, 
                   hasShuffled: true,
                   exploredPossibilities: (exploredPossibilities + 1),
                 }
    }
};

export const resetItems = () => {
    console.log("Reset Items Triggered!");
    return {
        type: RESET_ITEMS,
        payload: initialState
    }
};

export const updatedSavedCombos = (updatedSavedCombos, key) => {
    return {
        type: UPDATE_SAVED_COMBOS,
        payload: {
            updatedCombos: updatedSavedCombos,
            key: key
        }
    }
}

export const saveCombo = (categories, items) => {
    return {
        type: SAVE_COMBO,
        payload: {
            categories: categories,
            items: items
        }
    }
}

export const setMarketingExample = () => {
    return {
        type: SET_MARKETING_STATE,
        payload: marketingState
    }
}

export const setLivingExample = () => {
    return {
        type: SET_LIVING_STATE,
        payload: livingState
    }
}