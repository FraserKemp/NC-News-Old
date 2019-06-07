import React, { Component } from 'react';
import { getTopicByName, getArticles } from '../api';
import ArticleList from '../Articles components/ArticlesList';
import Error from '../Error Component/Error';
import './SingleTopic.css';

export default class SingleTopic extends Component {
  state = {
    topic: null,
    relatedArticles: [],
    err: null
  };

  componentDidMount() {
    console.log('mounted ... ');
    const { topicName } = this.props;
    getTopicByName(topicName)
      .then(topic => {
        this.setState({ topic });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
    const params = { topic: topicName };
    getArticles(params)
      .then(articles => {
        this.setState({ relatedArticles: articles });
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  }

  render() {
    const { topic, relatedArticles } = this.state;
    const { err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    return (
      topic && (
        <div>
          <ul id="single-topic">
            <h1>Topic: {topic.slug}</h1>
            <p>{topic.description}</p>
          </ul>
          <ul id="r-a-container">
            <h1 id="r-a-title">Related articles: </h1>
            {relatedArticles.map(article => {
              return (
                <ArticleList
                  key={`realsed-article${article.article_id}`}
                  article={article}
                />
              );
            })}
          </ul>
        </div>
      )
    );
  }
}
