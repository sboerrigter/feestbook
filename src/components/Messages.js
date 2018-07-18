import React, { Component } from 'react';
import Message from './Message';

export default class Messages extends Component {
  render() {
    const messages = this.props.messages;

    return (
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    );
  }
}
