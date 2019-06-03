import React from 'react';
import { Router } from '@reach/router';
import Header from './Header components/Header';
import ArticlesPage from './Articles components/ArticlesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticlesPage path="/articles" />
      </Router>
    </div>
  );
}

export default App;
