import { UPDATE_ITEM } from '../actions/action';

const initialState = {
    table: {
         '1': {
             category: 'Category 1',
             items: ['Item 1', 'Item 2', 'Item 3']
         },
         '2': {
            category: 'Category 2',
            items: ['Item 1', 'Item 2', 'Item 3']
        },
        '3': {
            category: 'Category 3',
            items: ['Item 1', 'Item 2', 'Item 3']
        },
    }
};

export default (state = initialState, action) => {
    console.log(initialState);
    switch(action.type) {
        case UPDATE_ITEM:
            console.log('updated Item on Reducer');
            console.log(action.payload);
            return Object.assign({}, state, {
                table: action.payload,
            })
        default:
            return state;
    }
};