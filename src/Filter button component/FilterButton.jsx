import React, { Component } from 'react';
import './Filter.css';

class FilterButton extends Component {
  state = { showFilters: null };
  render() {
    const { showFilters } = this.state;
    return (
      <div
        onMouseEnter={() => this.showFilters(true)}
        onMouseLeave={() => this.showFilters(false)}
        className="dropdown"
      >
        <button id="filter-btn">Filter ☰</button>
        {showFilters && (
          <ul id="secondary-button-holder">
            <button
              id="secondary-button"
              onClick={e => {
                const params = { sort_by: e.target.value };
                this.props.filterBySelectedFilter(params);
              }}
              value="created_at"
            >
              Date Created
            </button>
            <br />
            <button
              id="secondary-button"
              onClick={e => {
                const params = { sort_by: e.target.value };
                this.props.filterBySelectedFilter(params);
              }}
              value="comment_count"
            >
              Comment_count
            </button>
            <br />
            <button
              id="secondary-button"
              onClick={e => {
                const params = { sort_by: e.target.value };
                this.props.filterBySelectedFilter(params);
              }}
              value="votes"
            >
              Likes
            </button>
          </ul>
        )}
      </div>
    );
  }

  showFilters = bool => {
    this.setState({ showFilters: bool });
  };
}

export default FilterButton;
