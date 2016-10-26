import React from 'react';
import ReactDOM from 'react-dom';

import Item from './Item';

import testImage from '../ItemList/images/3.png';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Item title="test title" description="test description" image={testImage} buttonLabel="test label"/>, div);
});
