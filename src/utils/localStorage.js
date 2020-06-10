// trys to load the current state from local storage, if not found returns undefined
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("zwickytable");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined
  }
};

// saves the current state to local storage with the key 'zwickytable'
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("zwickytable", serializedState);
  } catch (err) {
      console.log(err);
      return undefined;
  }
};
