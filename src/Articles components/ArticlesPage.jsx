import React, { Component } from 'react';
import Title from '../Title components/Title';
import axios from 'axios';
import ArticleList from './ArticlesList';
import './ArticlesPage.css';

export default class ArticlesPage extends Component {
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
      <div>
        <Title />
        <ul>
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
