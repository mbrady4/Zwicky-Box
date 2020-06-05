
const initialState = {
    table: {
         'Category 1': ['Item 1', 'Item 2', 'Item 3'],
         'Category 2': ['Item 1', 'Item 2', 'Item 3'],
         'Category 3': ['Item 1', 'Item 2', 'Item 3'],
    }
};

export default (state = initialState, action) => {
    console.log(initialState);
    switch(action.type) {
 
        default:
            return state;
    }
};