import React, { Component } from 'react';
import GetTopicOptions from '../Topics components/TopicOptions';
import './ArticlePostForm';

export default class ArticlePostForm extends Component {
  state = {
    titleInput: null,
    bodyInput: null,
    topicInput: null
  };
  render() {
    const { topics } = this.props;
    return (
      <div className="post-article-box">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleSubmit(this.state);
          }}
          className="aricle-form-body"
        >
          <label>
            <div id="article-textbox">
              <input
                onChange={this.updateTitleInput}
                type="text"
                name="title"
                placeholder="Article title"
              />
            </div>
          </label>
          <br />
          <label>
            <div id="article-textbox">
              <textarea
                onChange={this.updateBodyInput}
                type="text"
                name="body"
                placeholder="Article body"
              />
            </div>
          </label>
          <br />
          <label>
            <select
              onChange={this.updateTopicInput}
              name="topics"
              id="topic-options"
            >
              {topics.map((topic, i) => {
                return (
                  <GetTopicOptions key={`topicOption${i}`} topic={topic} />
                );
              })}
            </select>
          </label>
          <button id="post-article-btn2">Post Article</button>
        </form>
      </div>
    );
  }
  updateTitleInput = e => {
    this.setState({ titleInput: e.target.value });
  };

  updateBodyInput = e => {
    this.setState({ bodyInput: e.target.value });
  };

  updateTopicInput = e => {
    this.setState({ topicInput: e.target.value });
  };
}
