import React from 'react';
import { Link } from '@reach/router';

const GetTopics = props => {
  const { topic } = props;
  return (
    <div id="topics-container-items">
      <Link to={`/topics/${topic.slug}`}>
        <h4>{topic.slug}</h4>
        <h4>{topic.description}</h4>
      </Link>
    </div>
  );
};

export default GetTopics;
