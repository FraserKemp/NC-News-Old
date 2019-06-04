import React, { Component } from 'react';
import { getUserByUsername } from '../api';
import './Login.css';

export default class LoginPage extends Component {
  state = {
    userInput: null
  };

  updateUserInput = e => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    getUserByUsername(this.state.userInput).then(user => {
      console.log(user);
      if (user) return this.props.updateAppUser(user);
    });
  };

  render() {
    return (
      <div className="LoginBox">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input onChange={this.updateUserInput} type="text" />
          </label>
          <button>Login!</button>
        </form>
      </div>
    );
  }
}
