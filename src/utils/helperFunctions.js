// Helper function which rebuilds the object sans deleted category
export const removeByKey = (myObj, deleteKey) => {
  return Object.keys(myObj)
    .filter((key) => key !== deleteKey)
    .reduce((result, current) => {
      result[current] = myObj[current];
      return result;
    }, {});
};

// returns a random int in the provided range
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// returns the number of unique possibilities contained within the provided table
export const possibilityCount = (table) => {
  const categories = Object.keys(table);
  const lengths = [];
  categories.map((category, key) => {
    return lengths.push(table[category].items.length);
  });
  const product = lengths.reduce((product, length) => {
    return product * length;
  }, 1);
  return product;
};
