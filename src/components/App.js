import React, { Component } from 'react';
import Messages from './Messages';
import Speak from './Speak';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          id: 1,
          name: 'Sjoerd',
          content: 'Hello world',
          opacity: .1,
        },
        {
          id: 2,
          name: 'Harold',
          content: 'Hello to you too',
          opacity: .5
        },
        {
          id: 3,
          name: 'Luuk',
          content: 'Hi there',
          opacity: 1
        }
      ]
    }
  }

  render() {
    return (
      <div
        className="App"
      >
        <Messages messages={this.state.messages} />

        <Speak />
      </div>
    );
  }
}
