import React from 'react';
import './App.css';
import FMenu from './Menu.js';

function App(props) {
  return (
    <div className="App">
      <FMenu menu={props.data.menu} />
    </div>
  );
}

export default App;
