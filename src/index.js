import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { loadState, saveState } from "./utils/localStorage.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";

// Attempt to load state from local storage
const persistedState = loadState();

// initialize the store, specifying reducer and providing persisted state (undefined if non-existent)
const store = createStore(rootReducer, persistedState);

// as the store is updated, save the updated store to local storage
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    {/* Initialize react-router on the App */}
    <Router>
      {/* Connect the store to the app */}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
