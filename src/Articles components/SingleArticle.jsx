import React, { Component } from 'react';
import { getArticleById, getCommentsByArticleId, patchArticle } from '../api';
import CommentList from '../Comment components/CommentList';
import './SingleArticle.css';

class SingleArticle extends Component {
  state = {
    article: null,
    comments: [],
    voteChange: 0
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
    const { article, comments, voteChange } = this.state;
    return (
      article && (
        <div className="single-article-container">
          <ul id="single-article-item">
            <h1 id="article-title">{article.title}</h1>
            <p>{article.body}</p>
            <h4>Author: {article.author}</h4>
            <h4>Created at: {article.created_at}</h4>
            <h4>Likes: {article.votes + voteChange}</h4>
            <button onClick={() => this.handleVote(article.article_id, 1)}>
              Heart
            </button>
            <button onClick={() => this.handleVote(article.article_id, -1)}>
              Dislike
            </button>
          </ul>
          <ul>
            <h1>Comments: </h1>
            {comments.map(comment => {
              return (
                <CommentList
                  key={`comment${comment.comment_id}`}
                  comment={comment}
                />
              );
            })}
          </ul>
        </div>
      )
    );
  }

  handleVote = (article_id, direction) => {
    this.setState(prevstate => {
      return { voteChange: prevstate.voteChange + direction };
    });
    patchArticle(article_id, direction).catch(err => {
      this.setState(prevstate => {
        return { voteChange: prevstate.voteChange - direction };
      });
    });
  };
}

export default SingleArticle;
