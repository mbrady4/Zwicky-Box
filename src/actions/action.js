export const UPDATE_ITEM = "UPDATE_ITEM";
export const SHUFFLE = "SHUFFLE";
export const RESET_ITEMS = "RESET_ITEMS";
export const SAVE_COMBO = "SAVE_COMBO";
export const UPDATE_SAVED_COMBOS = "UPDATE_SAVED_COMBOS";

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
                   exploredPossibilities: (exploredPossibilities + 1)
                 }
    }
};

export const resetItems = () => {
    console.log("Reset Items Triggered!");
    return {
        type: RESET_ITEMS,
        payload: resetState
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

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const possibilityCount = (table) => {
    const categories = Object.keys(table);
    const lengths = []
    console.log(categories);
    categories.map( (category, key) => {
        console.log('ho', table[category]);
        return lengths.push(table[category].items.length)
    });
    console.log(lengths);
    const product = lengths.reduce( (product, length) => {return product * length}, 1);
    console.log(product);
    return product;
}

const resetState = {
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
    exploredPossibilities: 0
};