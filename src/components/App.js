import Header from './Header';
import Input from './Input';
import Messages from './Messages';
import Music from './Music';
import React, { Component } from 'react';
import Welcome from './Welcome';
import { css } from 'emotion';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messages: [],
      name: '',
      user: false,
    }

    this.updateName = this.updateName.bind(this);
    this.submitName = this.submitName.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    })
  }

  submitName(e) {
    if (this.state.name !== '') {
      e.preventDefault();

      this.setState({
        name: '',
        user: this.state.name,
      })
    }
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value,
    })
  }

  submitMessage(e) {
    if ((e.key === 'Enter') && (this.state.message !== '')) {
      this.setState((state) => {
        return {
          message: '',
          messages: state.messages.concat([
            {
              name: this.state.name,
              content: this.state.message,
            }
          ]),
        }
      })
    }
  }

  render() {
    let components = (
      <div>
        <Messages messages={this.state.messages}/>

        <Input
          value={this.state.message}
          updateMessage={this.updateMessage}
          submitMessage={this.submitMessage}
        />
      </div>
    )
    if (!this.state.user) {
      components = (
        <Welcome
          updateName={this.updateName}
          submitName={this.submitName}
          value={this.state.name}
        />
      )
    }

    return (
      <div
        className={css(`
          display: flex;
          flex-direction: column;
          height: 100vh;
        `)}
      >
        <Header/>

        {components}

        <Music/>
      </div>
    );
  }
}
