import React, { Component } from 'react';
import './Sign-up.css';

export default class SignUpPage extends Component {
  state = { username: null, name: null, avatar_url: null };
  render() {
    return (
      <div className="sign-up-login-box">
        <h1>Sign Up</h1>
        <form className="sign-up-form-body">
          <label>
            <div id="sign-up-textbox">
              <input type="text" placeholder="Username" />
            </div>
          </label>
          <label>
            <div id="sign-up-textbox">
              <input type="text" placeholder="Name" />
            </div>
          </label>
          <label>
            <div id="sign-up-textbox">
              <input type="text" placeholder="Avatar_Url" />
            </div>
          </label>
          <button className="sign-up-btn">Sign Up</button>
        </form>
      </div>
    );
  }
}
