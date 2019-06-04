import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from './ArticlesList';
import './ArticlesPage.css';
// import { getArticles } from '../api';

class ArticlesPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const url = 'https://fk-news-app.herokuapp.com/api/articles';
    axios.get(url).then(({ data: { articles } }) => {
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
