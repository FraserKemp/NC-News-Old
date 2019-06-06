import React, { Component } from 'react';
import { deleteCommentByCommentId } from '../api';

class CommentList extends Component {
  state = {};
  render() {
    const { comment, user } = this.props;
    return (
      <div id="container-items">
        <h3>{comment.author}</h3>
        <p>{comment.body}</p>
        <h4>Likes: {comment.votes}</h4>
        {user && comment.author === user.username && (
          <button onClick={() => this.deleteComment(comment.comment_id)}>
            Delete your comment
          </button>
        )}
      </div>
    );
  }

  deleteComment = comment_id => {
    deleteCommentByCommentId(comment_id).then(res => console.log(res));
  };
}

export default CommentList;
