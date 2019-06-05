import React from 'react';
import { Link } from '@reach/router';

const ArticleList = props => {
  const { article } = props;
  return (
    <div id="container-items">
      <Link to={`/articles/${article.article_id}`}>
        <h4>{article.title}</h4>
        <h4>{article.author}</h4>
        <h4>{article.topic}</h4>
        <h4>{article.votes}</h4>
        <h4>{article.created_at}</h4>
      </Link>
    </div>
  );
};

export default ArticleList;
