import React, { Component } from 'react';
// import { Link } from '@reach/router';
import { getUserByUsername } from '../api';
import './Login.css';

class LoginPage extends Component {
  state = {
    userInput: null
  };

  updateUserInput = e => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    getUserByUsername(this.state.userInput).then(user => {
      if (user) {
        this.props.updateAppUser(user);
      }
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
          {/* <Link to="/articles"> */}
          <button className="btn">Sign In</button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}

export default LoginPage;
