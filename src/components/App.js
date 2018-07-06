import React, { Component } from 'react';
import Messages from './Messages';
import Speak from './Speak';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: [
        {
          name: 'Sjoerd',
          content: 'Hello world',
          opacity: .1,
        },
        {
          name: 'Harold',
          content: 'Hello to you too',
          opacity: .5,
        },
        {
          name: 'Luuk',
          content: 'Hi there',
          opacity: 1,
        }
      ],
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
              opacity: 1,
            }
          ]),
        }
      })
    }
  }

  render() {
    return (
      <div
        className="App"
      >
        <Messages messages={this.state.messages} />

        <Speak input={this.state.input} updateInput={this.updateInput} sendMessage={this.sendMessage} />
      </div>
    );
  }
}
