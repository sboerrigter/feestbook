import React, { Component } from 'react';
import Message from './Message';
import { css } from 'emotion';

export default class Messages extends Component {
  render() {
    const messages = Object.keys(this.props.messages).map(k => this.props.messages[k]);

    return (
      <div
        className={css(`
          align-items: flex-start;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          padding: 20px 30px;
          overflow: hidden;
          max-width: 100%;
          margin-top: auto;
          flex: 1;
        `)}
      >
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            user={this.props.user}
          />
        ))}
      </div>
    );
  }
}
