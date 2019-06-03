import React, { Component } from 'react';
import axios from 'axios';
import './SingleArticle.css';

class SingleArticle extends Component {
  state = {
    article: null
  };
  componentDidMount() {
    console.log('mounted ... ');
    const url = `https://fk-news-app.herokuapp.com/api/articles/${
      this.props.article_id
    }`;
    axios.get(url).then(({ data: { article } }) => {
      this.setState({ article });
    });
  }
  render() {
    const { article } = this.state;
    return (
      article && (
        <div className="single-article-container">
          <ul id="single-article-item">
            <h1 id="article-title">{article.title}</h1>
            <p>{article.body}</p>
            <h4>Created at:{article.created_at}</h4>
            <h4>Hearts{article.votes}</h4>
          </ul>
        </div>
      )
    );
  }
}

export default SingleArticle;
