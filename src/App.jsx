// @flow

import React from 'react';

import logo from './assets/logo.svg';
import './style/App.css';

import JediForm from './components/JediForm';
import JediList from './components/JediList';

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <JediForm />
      <JediList />
    </div>
  );
}
