import React, { Component } from 'react';

export default class Speak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    }

    this.updateInput = this.updateInput.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  updateInput(e) {
    this.setState({
      input: e.target.value,
    })
  }

  sendMessage(e) {
    if ((e.key === 'Enter') && (this.state.input !== '')) {
      console.log(this.state.input);

      this.setState({
        input: '',
      })
    }
  }

  render() {
    return (
      <input
        placeholder="Say something"
        value={this.state.input}
        onChange={this.updateInput}
        onKeyPress={this.sendMessage}
      />
    );
  }
}
