import React, { Component } from 'react';
import { deleteCommentByCommentId, patchCommentByCommentId } from '../api';
import Error from '../Error Component/Error';

class CommentList extends Component {
  state = {
    voteChange: 0,
    commentVotes: null,
    err: null
  };

  componentDidMount() {
    const { comment } = this.props;
    this.setState({ commentVotes: comment.votes });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.voteChange !== this.state.voteChange) {
    }
  }

  render() {
    const { comment, user } = this.props;
    const { voteChange, commentVotes } = this.state;
    const { err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    return (
      <div id="container-items">
        <h3>{comment.author}</h3>
        <p>{comment.body}</p>
        <h4>Likes: {commentVotes}</h4>
        <button
          disabled={voteChange === 1}
          id="comment-upvote-btn"
          onClick={() => this.handleVote(comment.comment_id, 1)}
        >
          <span role="img" aria-label="thumbs down">
            👍
          </span>
        </button>
        <button
          disabled={voteChange === -1}
          id="comment-downvote-btn"
          onClick={() => this.handleVote(comment.comment_id, -1)}
        >
          <span role="img" aria-label="thumbs down">
            👎
          </span>
        </button>
        {user && comment.author === user.username && (
          <button onClick={() => this.deleteComment(comment.comment_id)}>
            Delete your comment
          </button>
        )}
      </div>
    );
  }

  handleVote = (comment_id, direction) => {
    patchCommentByCommentId(comment_id, direction).catch(response => {
      this.setState(prevstate => {
        return { commentVotes: prevstate.commentVotes - direction };
      });
      this.setState(prevstate => {
        return { voteChange: prevstate.voteChange - direction };
      });
      const errStatus = response.status;
      const errMessage = response.data.msg;
      const err = { errStatus, errMessage };
      this.setState({ err });
    });
    this.setState(prevstate => {
      return { commentVotes: prevstate.commentVotes + direction };
    });
    this.setState(prevstate => {
      return { voteChange: prevstate.voteChange + direction };
    });
  };

  deleteComment = comment_id => {
    const {
      article: { article_id }
    } = this.props;
    deleteCommentByCommentId(comment_id)
      .then(res => {
        this.props.getAllTopicsAfterDel(article_id);
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  };
}

export default CommentList;
