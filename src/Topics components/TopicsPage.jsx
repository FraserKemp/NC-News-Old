import React, { Component } from 'react';
import axios from 'axios';
import GetTopics from './TopicsList';
import './TopicsPage.css';

class TopicsPage extends Component {
  state = {
    topics: [],
    button: false
  };

  componentDidMount() {
    const url = 'https://fk-news-app.herokuapp.com/api/topics';
    axios.get(url).then(({ data: { topics } }) => {
      this.setState({ topics });
    });
  }

  showTopicForm(bool) {
    let newBool = bool;
    bool ? (newBool = false) : (newBool = true);
    this.setState({ button: newBool });
  }

  render() {
    const { topics, button } = this.state;
    return (
      <div>
        <ul id="topics-container">
          {topics.map((topic, i) => {
            return <GetTopics key={`topic${i}`} topic={topic} />;
          })}
        </ul>
        <button
          id="new-topic-button"
          onClick={() => this.showTopicForm(button)}
        >
          Add Topic
        </button>

        {button && (
          <form className="topic-form">
            <label id="topic-form-label">
              Slug:
              <input type="text" name="slug" placeholder="any topic" />
            </label>
            <br />
            <label id="topic-form-label">
              Description:
              <input
                type="text"
                name="description"
                placeholder="northcoders is the bomb"
              />
            </label>
            <button id="new-topic-submit-button">Add new Topic!</button>
          </form>
        )}
      </div>
    );
  }
}

export default TopicsPage;
