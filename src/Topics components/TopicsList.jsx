import React from 'react';

const GetTopics = props => {
  const { topic } = props;
  return (
    <div>
      <h4>{topic.slug}</h4>
      <h4>{topic.description}</h4>
    </div>
  );
};

export default GetTopics;
