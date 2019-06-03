import React from 'react';
import { Router } from '@reach/router';
import Header from './Header components/Header';
import ArticlesPage from './Articles components/ArticlesPage';
import TopicsPage from './Topics components/TopicsPage';
import SingleArticle from './Articles components/SingleArticle';
import SingleTopic from './Topics components/SingleTopic';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticlesPage path="/articles" />
        <TopicsPage path="/topics" />
        <SingleArticle path="/articles/:article_id" />
        <SingleTopic path="/topics/:topicName" />
      </Router>
    </div>
  );
}

export default App;
