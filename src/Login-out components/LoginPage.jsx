import React, { Component } from 'react';
import { getUserByUsername } from '../api';
import Error from '../Error Component/Error';
import './Login.css';

class LoginPage extends Component {
  state = {
    userInput: null,
    err: null
  };

  updateUserInput = e => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    getUserByUsername(this.state.userInput)
      .then(user => {
        if (user) {
          this.props.updateAppUser(user);
        }
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  };

  render() {
    const { err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    return (
      <div className="login-box">
        <h1>Login</h1>
        <form className="form-body" onSubmit={this.handleSubmit}>
          <label>
            <div id="textbox">
              <input
                required={true}
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

export default LoginPage;
