import React from 'react';

import NavBar from './components/NavBar.js';
import ZwickyTable from './components/zwickyTable/ZwickyTable';
import './App.scss';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ZwickyTable />
    </div>
  );
}

export default App;
