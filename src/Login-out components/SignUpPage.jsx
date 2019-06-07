import React, { Component } from 'react';
import { postUser } from '../api';
import './Sign-up.css';
import Error from '../Error Component/Error';

export default class SignUpPage extends Component {
  state = { username: null, name: null, avatar_url: null };
  render() {
    const { err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    return (
      <div className="sign-up-login-box">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit} className="sign-up-form-body">
          <label>
            <div id="sign-up-textbox">
              <input
                required={true}
                onChange={this.updateUsernameInput}
                type="text"
                placeholder="Username"
              />
            </div>
          </label>
          <label>
            <div id="sign-up-textbox">
              <input
                required={true}
                onChange={this.updateNameInput}
                type="text"
                placeholder="Name"
              />
            </div>
          </label>
          <label>
            <div id="sign-up-textbox">
              <input
                required={true}
                onChange={this.updateAvatar_url}
                type="text"
                placeholder="Avatar_Url"
              />
            </div>
          </label>
          <button className="sign-up-btn">Sign Up</button>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, name, avatar_url } = this.state;
    const newUser = { username, name, avatar_url };
    postUser(newUser)
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

  updateUsernameInput = e => {
    this.setState({ username: e.target.value });
  };

  updateNameInput = e => {
    this.setState({ name: e.target.value });
  };

  updateAvatar_url = e => {
    this.setState({ avatar_url: e.target.value });
  };
}
