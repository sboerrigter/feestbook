import React, { Component } from 'react';
import Messages from './Messages';
import Speak from './Speak';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: [],
      name: 'Sjoerd',
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

      this.setState((state) => {
        return {
          input: '',
          messages: state.messages.concat([
            {
              name: this.state.name,
              content: this.state.input,
            }
          ]),
        }
      })
    }
  }

  render() {
    return (
      <div
        style={{
          padding: '20px 30px 40px',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          fontSize: 14,
          lineHeight: 1.5,
        }}
      >
        <Messages messages={this.state.messages} />
        <Speak input={this.state.input} updateInput={this.updateInput} sendMessage={this.sendMessage} />
      </div>
    );
  }
}
