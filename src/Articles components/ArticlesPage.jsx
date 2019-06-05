import React, { Component } from 'react';
import ArticleList from './ArticlesList';
import './ArticlesPage.css';
import { getArticles } from '../api';

class ArticlesPage extends Component {
  state = {
    articles: [],
    created_at: 'created_at',
    comment_count: 'comment_count',
    votes: 'votes'
  };

  componentDidMount() {
    getArticles({}).then(articles => {
      this.setState({ articles });
    });
  }

  filterBySelectedFilter(params) {
    getArticles(params).then(articles => {
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
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
}

export default ArticlesPage;
