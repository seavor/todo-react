// Component Library Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Component File Dependencies
import './index.css';
import App from './App/App';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
