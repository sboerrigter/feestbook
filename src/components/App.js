import About from './About';
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

    this.restart = this.restart.bind(this);
    this.updateName = this.updateName.bind(this);
    this.submitName = this.submitName.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  restart(e) {
    this.setState({
      user: false,
    });
  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  submitName(e) {
    if ((e.type === 'click' || e.key === 'Enter') && (this.state.name !== '')) {
      this.setState({
        name: '',
        user: this.state.name,
      });
    }
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  submitMessage(e) {
    if ((e.key === 'Enter') && (this.state.message !== '')) {
      this.setState((state) => {
        return {
          message: '',
          messages: state.messages.concat([
            {
              user: this.state.user,
              content: this.state.message,
            }
          ]),
        }
      });
    }
  }

  render() {
    let about = (this.state.showAbout) ? (
      <About />
    ) : '';

    let welcome = (!this.state.user) ? (
      <Welcome
        updateName={this.updateName}
        submitName={this.submitName}
        value={this.state.name}
      />
    ) : '';


    let messages = (this.state.user) ? (
      <Messages
        messages={this.state.messages}
        user={this.state.user}
      />
    ) : '';

    let input = (this.state.user) ? (
      <Input
        value={this.state.message}
        updateMessage={this.updateMessage}
        submitMessage={this.submitMessage}
      />
    ) : '';

    let music = (this.state.user) ? (
      <Music />
    ) : '';

    return (
      <div
        className={css(`
          display: flex;
          flex-direction: column;
          height: 100vh;
        `)}
      >
        <Header restart={this.restart} />

        {about}
        {welcome}
        {messages}
        {input}
      </div>
    );
  }
}
