import React, { Component } from 'react';
import Message from './Message';

export default class Messages extends Component {
  render() {
    const messages = this.props.messages;

    return (
      <div>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    );
  }
}
