import * as firebase from 'firebase';
import About from './About';
import Header from './Header';
import Input from './Input';
import Messages from './Messages';
import Music from './Music';
import React, { Component } from 'react';
import Welcome from './Welcome';
import { css, injectGlobal } from 'emotion';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(#1F1F99, #220066);
    background-attachment: fixed;
    color: white;
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }

  p {
    margin: 0 0 1.5em;
  }
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messages: false,
      name: '',
      showAbout: false,
      user: false,
    }

    this.restart = this.restart.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.hideAbout = this.hideAbout.bind(this);
    this.updateName = this.updateName.bind(this);
    this.submitName = this.submitName.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    const messages = firebase.database().ref().child('messages');

    messages.on('value', snap => {
      this.setState({
        messages: snap.val(),
      })
    });
  }

  restart() {
    this.setState({
      user: false,
    });
  }

  showAbout() {
    this.setState({
      showAbout: true,
    });
  }

  hideAbout() {
    this.setState({
      showAbout: false,
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
        }
      });

      firebase.database().ref('messages').push({
        user: this.state.user,
        content: this.state.message,
      });
    }
  }

  render() {
    const header = (
      <Header restart={this.restart} showAbout={this.showAbout} />
    );

    const about = (this.state.showAbout) ? (
      <About
        hideAbout={this.hideAbout}
      />
    ) : '';

    const welcome = (!this.state.user) ? (
      <Welcome
        updateName={this.updateName}
        submitName={this.submitName}
        value={this.state.name}
      />
    ) : '';


    const messages = (this.state.user) ? (
      <Messages
        messages={this.state.messages}
        user={this.state.user}
      />
    ) : '';

    const input = (this.state.user) ? (
      <Input
        value={this.state.message}
        updateMessage={this.updateMessage}
        submitMessage={this.submitMessage}
      />
    ) : '';

    const music = (this.state.user) ? (
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
        {header}
        {about}
        {welcome}
        {messages}
        {input}
      </div>
    );
  }
}
