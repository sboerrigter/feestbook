import React, { Component } from 'react';
import Message from './Message';

export default class Messages extends Component {
  render() {
    const messages = this.props.messages;

    return (
      <div style={{
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll',
        padding: '20px 30px',
        flex: '1',
        width: '100%',
      }}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    );
  }
}
