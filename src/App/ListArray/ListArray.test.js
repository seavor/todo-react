import React from 'react';
import ReactDOM from 'react-dom';
import ListArray from './ListArray';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListArray />, div);
  ReactDOM.unmountComponentAtNode(div);
});
