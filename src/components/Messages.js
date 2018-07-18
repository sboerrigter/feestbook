import React, { Component } from 'react';
import Message from './Message';
import { css } from 'emotion';

export default class Messages extends Component {
  render() {
    const messages = this.props.messages;

    return (
      <div
        className={css(`
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          padding: 20px 30px;
          flex: 1;
        `)}
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    );
  }
}
