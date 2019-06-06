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

  updateAppUser = (user, bool) => {
    this.setState({ user, userLogedIn: bool });
  };

  logOutUser = bool => {
    this.setState({ user: null, userLogedIn: bool });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header
          user={this.state.user}
          userLogedIn={this.state.userLogedIn}
          logOutUser={this.logOutUser}
        />
        <Router>
          <ArticlesPage user={user} path="/articles" />
          <TopicsPage user={user} path="/topics" />
          <SingleArticle user={user} path="/articles/:article_id" />
          <SingleTopic path="/topics/:topicName" />
          <LoginBox updateAppUser={this.updateAppUser} path="/login" />
        </Router>
      </div>
    );
  }
}

export default App;
