import { CardActions } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './index';

it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});
