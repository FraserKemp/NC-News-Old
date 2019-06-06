import React, { Component } from 'react';
import ArticleList from './ArticlesList';
import './ArticlesPage.css';
import { getArticles, getTopics, postNewArticle } from '../api';
import ArticlePostForm from '../Form components/ArticlePostForm';

class ArticlesPage extends Component {
  state = {
    articles: [],
    topics: [],
    created_at: 'created_at',
    comment_count: 'comment_count',
    votes: 'votes',
    button: false
  };

  componentDidMount() {
    getArticles({}).then(articles => {
      this.setState({ articles });
    });
    getTopics().then(topics => {
      this.setState({ topics });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles.length !== this.state.articles.length) {
      getArticles().then(articles => {
        this.setState({ articles });
      });
    }
  }

  render() {
    const { articles, button, topics } = this.state;
    const { user } = this.props;
    return (
      <div>
        <div className="dropdown">
          <button id="btn">Filter</button>
          <div>
            <button
              id="secondary-button"
              onClick={e => {
                const params = { sort_by: e.target.value };
                this.filterBySelectedFilter(params);
              }}
              value="created_at"
            >
              Date Created
            </button>
            <button
              id="secondary-button"
              onClick={e => {
                const params = { sort_by: e.target.value };
                this.filterBySelectedFilter(params);
              }}
              value="comment_count"
            >
              Comment_count
            </button>
            <button
              id="secondary-button"
              onClick={e => {
                const params = { sort_by: e.target.value };
                this.filterBySelectedFilter(params);
              }}
              value="votes"
            >
              Likes
            </button>
          </div>
        </div>
        {user && (
          <button onClick={() => this.showNewArticleForm(button)}>
            Wrtite an Article{' '}
            <span role="img" aria-label="hand-writing">
              ✍🏻
            </span>
          </button>
        )}
        {button && (
          <div className="new-article-box">
            <ArticlePostForm handleSubmit={this.handleSubmit} topics={topics} />
          </div>
        )}
        <div className="new-article-box">{button && <form />}</div>
        <div className="main">
          <ul id="container">
            {articles.map(article => {
              return (
                <ArticleList
                  key={`article${article.article_id}`}
                  article={article}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  handleSubmit = state => {
    const { titleInput, bodyInput, topicInput } = state;
    const { user } = this.props;
    const newArticle = {
      title: titleInput,
      body: bodyInput,
      topic: topicInput,
      username: user.username
    };
    postNewArticle(newArticle).then(newArticle => {
      getArticles({}).then(articles => {
        this.setState({ articles });
      });
    });
  };

  updateTitleInput = e => {
    this.setState({ titleInput: e.target.value });
  };

  updateBodyInput = e => {
    this.setState({ bodyInput: e.target.value });
  };

  updateTopicInput = e => {
    this.setState({ topicInput: e.target.value });
  };

  filterBySelectedFilter(params) {
    getArticles(params).then(articles => {
      this.setState({ articles });
    });
  }

  showNewArticleForm = bool => {
    let newBool = bool;
    bool ? (newBool = false) : (newBool = true);
    this.setState({ button: newBool });
  };
}

export default ArticlesPage;
