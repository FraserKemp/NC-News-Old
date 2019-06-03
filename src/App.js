import React from 'react';
import { Router } from '@reach/router';
import Header from './Header components/Header';
import ArticlesPage from './Articles components/ArticlesPage';
import TopicsPage from './Topics components/TopicsPage';
// import LoginBox from './Login-out components/LoginBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticlesPage id="main" path="/articles" />
        <TopicsPage path="/topics" />
      </Router>
    </div>
  );
}

export default App;
