import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.js';
import Table from './components/Table/Table';
import Examples from './components/Examples/Examples';
import HowToUse from './components/HowToUse/HowToUse';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route path='/howtouse'>
            <HowToUse />
          </Route>
          <Route path='/examples'>
            <Examples />
          </Route>
          <Route exact path='/'>
            <Table />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
