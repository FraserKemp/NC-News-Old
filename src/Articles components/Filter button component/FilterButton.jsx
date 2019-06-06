import React, { Component } from 'react';

export default class FilterButton extends Component {
  state = { showFilters = null};
  render() {
    return <div />;
  }
  showFilters = e => {
    this.setState({ showFilters: true });
  };
}
