export const UPDATE_ITEM = "UPDATE_ITEM";

export const updateItem = (updatedTable) => {
    return {
        type: UPDATE_ITEM,
        payload: updatedTable
    }
};