import React from 'react';

const ArticleList = props => {
  const { article } = props;
  return (
    <div id="container-items">
      <h4>{article.title}</h4>
      <h4>{article.author}</h4>
      <h4>{article.topic}</h4>
      <h4>{article.votes}</h4>
    </div>
  );
};

export default ArticleList;
