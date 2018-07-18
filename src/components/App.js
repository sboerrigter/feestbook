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
        className={css(`
          -webkit-font-smoothing: antialiased;
          color: white;
          display: flex;
          flex-direction: column;
          font-family: system-ui, sans-serif;
          height: 100vh;
          line-height: 1.5;
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
