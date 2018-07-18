import Header from './Header';
import Input from './Input';
import Messages from './Messages';
import Music from './Music';
import React, { Component } from 'react';
import { css } from 'emotion';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: [],
      name: 'Username',
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
        className={css(`
          display: flex;
          flex-direction: column;
          height: 100vh;
        `)}
      >
        <Header/>

        <Messages messages={this.state.messages}/>

        <Input input={this.state.input} updateInput={this.updateInput} sendMessage={this.sendMessage}/>
        <Music/>
     </div>
    );
  }
}
