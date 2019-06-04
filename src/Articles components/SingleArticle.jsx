import React, { Component } from 'react';
import { getArticleById, getCommentsByArticleId } from '../api';
import './SingleArticle.css';

class SingleArticle extends Component {
  state = {
    article: null,
    comments: []
  };
  componentDidMount() {
    console.log('mounted ... ');
    const { article_id } = this.props;
    getArticleById(article_id).then(article => {
      this.setState({ article });
    });
    getCommentsByArticleId(article_id).then(comments => {
      this.setState({ comments });
    });
  }
  render() {
    console.log(this.state.comments);
    const { article } = this.state;
    return (
      article && (
        <div className="single-article-container">
          <ul id="single-article-item">
            <h1 id="article-title">{article.title}</h1>
            <p>{article.body}</p>
            <h4>Author: {article.author}</h4>
            <h4>Created at: {article.created_at}</h4>
            <h4>Hearts: {article.votes}</h4>
          </ul>
        </div>
      )
    );
  }
}

export default SingleArticle;
