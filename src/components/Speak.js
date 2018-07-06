import React, { Component } from 'react';

export default class Speak extends Component {
  render() {
    return (
      <input
        placeholder="Say something"
        value={this.props.input}
        onChange={this.props.updateInput}
        onKeyPress={this.props.sendMessage}
      />
    );
  }
}
