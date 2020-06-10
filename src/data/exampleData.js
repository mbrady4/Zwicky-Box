// Example state data
export const initialState = {
  table: {
    "1": {
      category: "Category 1",
      items: ["Item 1", "Item 2", "Item 3"],
      selected: null,
    },
    "2": {
      category: "Category 2",
      items: ["Item 1", "Item 2", "Item 3"],
      selected: null,
    },
    "3": {
      category: "Category 3",
      items: ["Item 1", "Item 2", "Item 3"],
      selected: null,
    },
  },
  numPossibilities: 27,
  exploredPossibilities: 0,
  savedCombos: {},
  hasShuffled: false,
};

// Marketing example data
export const marketingState = {
  table: {
    "1": {
      category: "Cost",
      items: ["Free", "Paid"],
      selected: null,
    },
    "2": {
      category: "Reach",
      items: ["Individual", "Group", "Mass"],
      selected: null,
    },
    "3": {
      category: "Density",
      items: ["Physical", "Digital"],
      selected: null,
    },
    "4": {
      category: "Entertainment",
      items: ["Written", "Presentation", "Recording", "Discussion"],
      selected: null,
    },
  },
  numPossibilities: 48,
  exploredPossibilities: 0,
  savedCombos: {},
  hasShuffled: false,
};

// Living situation example data
export const livingState = {
  table: {
    "1": {
      category: "Location",
      items: ["Mega-City", "City", "Suburb", "Country"],
      selected: null,
    },
    "2": {
      category: "Consumption Barrier",
      items: ["Ocean", "Lake", "Pools", "None"],
      selected: null,
    },
    "3": {
      category: "Density",
      items: ["High ", "Moderate", "Low"],
      selected: null,
    },
    "4": {
      category: "Entertainment",
      items: ["Sports teams", "Theatre", "Shopping", "Night life", "Museums"],
      selected: null,
    },
    "5": {
      category: "Housing Type",
      items: ["Apartment", "Condo", "Multi-family unit", "Small home"],
      selected: null,
    },
    "6": {
      category: "Transportation",
      items: ["Rideshare", "Personal vehicle", "Bus", "Train", "Walk", "Bike"],
      selected: null,
    },
  },
  numPossibilities: 5760,
  exploredPossibilities: 0,
  savedCombos: {},
  hasShuffled: false,
};
