import React from 'react';

const ArticleList = props => {
  const { article } = props;
  console.log(article);
  return (
    <div>
      <h3>{article.title}</h3>
      <h3>{article.author}</h3>
      <h3>{article.topic}</h3>
      <h3>{article.votes}</h3>
    </div>
  );
};

export default ArticleList;
