import React, { Component } from 'react';
import axios from 'axios';

class TopicsPage extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    const url = 'https://fk-news-app.herokuapp.com/api/topics';
    axios.get(url).then(({ data: { topics } }) => {
      this.setState({ topics });
    });
  }

  render() {
    return <div />;
  }
}

export default TopicsPage;
