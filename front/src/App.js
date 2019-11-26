import React from 'react';
import './App.css';
import FMenu from './Menu.js';
import PageContent from './PageContent';

function App(props) {
  return (
    <div className="App">
      <FMenu menu={props.data.menu} />
      <PageContent />
    </div>
  );
}

export default App;
