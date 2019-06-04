import React from 'react';
// import { Link } from '@reach/router';

const CommentList = props => {
  const { comment } = props;
  return (
    <div id="container-items">
      <h3>{comment.author}</h3>
      <p>{comment.body}</p>
      <h4>Hearts: {comment.votes}</h4>
    </div>
  );
};

export default CommentList;
