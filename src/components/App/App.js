import React from 'react';

import Header from '../../components/Header/Header';
import ItemList from '../../components/ItemList/ItemList';

import './App.css';
import './AppPlugins.css'; //this is only needed to keep this UI consistent with the original

export default () => (
  <div className="container">
    <Header />
    <ItemList />
  </div>
);