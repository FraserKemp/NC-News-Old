import React, { Component } from 'react';
import { getTopicByName, getArticles } from '../api';
import './SingleTopic.css';

export default class SingleTopic extends Component {
  state = {
    topic: null,
    relatedArticles: []
  };

  componentDidMount() {
    console.log('mounted ... ');
    const { topicName } = this.props;
    getTopicByName(topicName).then(topic => {
      this.setState({ topic });
    });
    const params = { topic: topicName };
    getArticles(params).then(articles => {
      this.setState({ relatedArticles: articles });
    });
  }

  render() {
    const { topic, relatedArticles } = this.state;
    return (
      topic && (
        <div>
          <ul id="single-topic">
            <h1>{topic.slug}</h1>
            <p>{topic.description}</p>
          </ul>
        </div>
      )
    );
  }
}
