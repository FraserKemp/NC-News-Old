import React, { Component } from 'react';
import {
  getArticleById,
  getCommentsByArticleId,
  patchArticle,
  postCommentByArticleId
} from '../api';
import CommentList from '../Comment components/CommentList';
import './SingleArticle.css';

class SingleArticle extends Component {
  state = {
    article: null,
    comments: [],
    voteChange: 0,
    button: false,
    commentBody: ''
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

  componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    if (prevState.comments.length !== this.state.comments.length) {
      getCommentsByArticleId(article_id).then(comments => {
        this.setState({ comments });
      });
    }
  }

  render() {
    const { article, comments, voteChange, button } = this.state;
    const { user } = this.props;
    return (
      article && (
        <div className="single-article-container">
          <ul id="single-article-item">
            <h1 id="article-title">{article.title}</h1>
            <p>{article.body}</p>
            <h4>Author: {article.author}</h4>
            <h4>Created at: {article.created_at}</h4>
            <h4>Likes: {article.votes + voteChange}</h4>
            <button
              disabled={voteChange === 1}
              id="upvote-btn"
              onClick={() => this.handleVote(article.article_id, 1)}
            >
              <span role="img" aria-label="thumbs down">
                👍
              </span>
            </button>
            <button
              disabled={voteChange === -1}
              id="downvote-btn"
              onClick={() => this.handleVote(article.article_id, -1)}
            >
              <span role="img" aria-label="thumbs down">
                👎
              </span>
            </button>
          </ul>
          <ul id="comment-holder">
            {user && (
              <button
                id="new-comment-btn"
                onClick={() => this.showCommentForm(button)}
              >
                Add Comment
              </button>
            )}
            {button && (
              <div className="comment-login-box">
                <h1>Post Comment</h1>
                <form
                  className="comment-form-body"
                  onSubmit={this.handleSubmit}
                >
                  <label>
                    <div id="comment-textbox">
                      <input type="text" defaultValue={user.username} />
                    </div>
                  </label>
                  <br />
                  <label>
                    <div id="comment-textbox">
                      <textarea
                        onChange={this.updateCommentBody}
                        type="text"
                        placehoder="Your Comment"
                      />
                    </div>
                  </label>
                  <button className="comment-btn">
                    <h3>Post</h3>
                  </button>
                </form>
              </div>
            )}
            <h1>Comments: </h1>
            {comments.map(comment => {
              return (
                <CommentList
                  key={`comment${comment.comment_id}`}
                  comment={comment}
                  user={user}
                />
              );
            })}
          </ul>
        </div>
      )
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.props;
    const { commentBody, article } = this.state;
    const { article_id } = article;
    const comment = { username: user.username, body: commentBody };
    postCommentByArticleId(article_id, comment).then(newComment => {
      this.setState(prevstate => {
        return {
          comments: [...prevstate.comments, newComment]
        };
      });
    });
  };

  updateCommentBody = e => {
    this.setState({ commentBody: e.target.value });
  };

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

  showCommentForm = bool => {
    let newBool = bool;
    bool ? (newBool = false) : (newBool = true);
    this.setState({ button: newBool });
  };
}

export default SingleArticle;
