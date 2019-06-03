import React, { Component } from 'react';
import './Login.css';

export default class LoginBox extends Component {
  state = {
    userInput: null
  };
  render() {
    return (
      <div className="LoginBox">
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}
