import React, { Component } from 'react';
import axios from 'axios';
import './SingleTopic.css';

export default class SingleTopic extends Component {
  state = {
    topic: null
  };

  componentDidMount() {
    console.log('mounted ... ');
    const url = `https://fk-news-app.herokuapp.com/api/topics/${
      this.props.topicName
    }`;
    axios.get(url).then(({ data: { topic } }) => {
      this.setState({ topic });
    });
  }
  render() {
    const { topic } = this.state;
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
