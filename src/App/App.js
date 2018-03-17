// Component Library Dependencies
import React, { Component } from 'react';

// Component File Dependencies
import './App.css';
import Clock from './Clock/Clock';
import ListArray from './ListArray/ListArray';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-clock">
          <Clock />
        </div>
        <div className="App-lists">
          <ListArray />
        </div>
        <div className="App-credits">
          <div>Icons made by <a href="http://www.freepik.com" target="_blank" title="Freepik" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        </div>
      </div>
    );
  }
}

export default App;
