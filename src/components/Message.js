import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    const message = this.props.message;

    return (
      <div
        style={{opacity: message.opacity}}
      >
        <strong>{message.name}: </strong>
        {message.content}
      </div>
    );
  }
}
