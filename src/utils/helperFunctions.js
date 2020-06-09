// Helper function which rebuilds the object sans deleted category
export const removeByKey = (myObj, deleteKey) => {
    return Object.keys(myObj)
      .filter(key => key !== deleteKey)
      .reduce((result, current) => {
        result[current] = myObj[current];
        return result;
    }, {});
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const possibilityCount = (table) => {
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
