import React, { Component } from 'react';

export default class Speak extends Component {
  render() {
    return (
      <input
        onChange={this.props.updateInput}
        onKeyPress={this.props.sendMessage}
        placeholder="Say something"
        style={{
          fontSize: 16,
          lineHeight: '20px',
          margin: 'auto 0 0',
          padding: '10px',
          border: 'none',
          width: '100%',
        }}
        value={this.props.input}
      />
    );
  }
}
