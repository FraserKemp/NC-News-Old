import React from 'react';

const CommentList = props => {
  const { comment } = props;
  return (
    <div id="container-items">
      <h3>{comment.author}</h3>
      <p>{comment.body}</p>
      <h4>Likes: {comment.votes}</h4>
    </div>
  );
};

export default CommentList;
