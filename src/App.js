import React from 'react';

import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import ZwickyTable from './components/zwickyTable/ZwickyTable';
import Examples from './components/Examples/Examples';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route path='/examples'>
            <Examples />
          </Route>
          <Route exact path='/'>
            <ZwickyTable />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
