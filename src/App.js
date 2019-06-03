import React from 'react';
import { Router } from '@reach/router';
import Header from './Header components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
