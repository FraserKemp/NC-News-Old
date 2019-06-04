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
      if (user) return this.props.updateAppUser(user);
    });
  };

  render() {
    return (
      <div className="login-box">
        <h1>Login</h1>
        <form className="form-body" onSubmit={this.handleSubmit}>
          <label>
            <div id="textbox">
              <input
                onChange={this.updateUserInput}
                type="text"
                placeholder="Username"
              />
            </div>
          </label>
          <button className="btn">Sign In</button>
        </form>
      </div>
    );
  }
}
