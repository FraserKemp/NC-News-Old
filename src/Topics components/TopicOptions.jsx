import React from 'react';

const GetTopicOptions = props => {
  const { topic } = props;
  return <option>{topic.slug}</option>;
};

export default GetTopicOptions;
