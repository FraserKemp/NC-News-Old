import React, { Component } from 'react';
import ArticleList from './ArticlesList';
import './ArticlesPage.css';
import { getArticles } from '../api';

class ArticlesPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    getArticles({}).then(articles => {
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    return (
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
    );
  }
}

export default ArticlesPage;
