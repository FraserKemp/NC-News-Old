import React, { Component } from 'react';
import GetTopics from './TopicsList';
import { getTopics, postNewTopic, updateTopicsState } from '../api';
import './TopicsPage.css';

class TopicsPage extends Component {
  state = {
    topics: [],
    button: false,
    slug: null,
    description: null
  };

  componentDidMount() {
    console.log('mounted...');
    getTopics().then(topics => {
      this.setState({ topics });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.topics.length !== this.state.topics.length) {
      console.log(prevState.topics, this.state.topics);
      updateTopicsState().then(topics => {
        this.setState({ topics });
      });
    }
  }

  showTopicForm(bool) {
    let newBool = bool;
    bool ? (newBool = false) : (newBool = true);
    this.setState({ button: newBool });
  }

  updateSlugInput = e => {
    this.setState({ slug: e.target.value });
  };

  updateDescriptionInput = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { slug, description } = this.state;
    const newTopic = { slug, description };
    postNewTopic(newTopic).then(newTopic => {
      this.setState(prevstate => {
        return {
          topics: [...prevstate.topics, newTopic]
        };
      });
    });
  };

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
        <div className="new-topic-box">
          {button && (
            <form className="form-body" onSubmit={this.handleSubmit}>
              <label>
                <div id="textbox">
                  <input
                    onChange={this.updateSlugInput}
                    type="text"
                    name="slug"
                    placeholder="Topic name"
                  />
                </div>
              </label>
              <br />
              <label id="topic-form-label">
                <div id="textbox">
                  <input
                    onChange={this.updateDescriptionInput}
                    type="text"
                    name="description"
                    placeholder="Description"
                  />
                </div>
              </label>
              <button className="btn">Add New Topic</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default TopicsPage;
