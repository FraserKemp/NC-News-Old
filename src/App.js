import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './Header components/Header';
import ArticlesPage from './Articles components/ArticlesPage';
import TopicsPage from './Topics components/TopicsPage';
import SingleArticle from './Articles components/SingleArticle';
import SingleTopic from './Topics components/SingleTopic';
import LoginBox from './Login-out components/LoginPage';
import './App.css';

class App extends Component {
  state = {
    userLogedIn: null,
    user: null
  };

  updateAppUser = user => {
    this.setState({ user });
  };

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Router>
          <ArticlesPage path="/articles" />
          <TopicsPage path="/topics" />
          <SingleArticle path="/articles/:article_id" />
          <SingleTopic path="/topics/:topicName" />
          <LoginBox updateAppUser={this.updateAppUser} path="/login" />
        </Router>
      </div>
    );
  }
}

export default App;
