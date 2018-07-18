import React, { Component } from 'react';
import { css } from 'emotion';

export default class Message extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clearity: 100,
    }
  }

  fade() {
    if (this.state.clearity > 0) {
      this.setState(state => ({
        clearity: state.clearity - 1,
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.fade(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const message = this.props.message;

    return (
      <div
        className={css(`
          background: white;
          border-radius: 2px;
          color: #333;
          font-size: .9em;
          margin: 0 0 10px 0;
          opacity: ${this.state.clearity/100};
          padding: .25em .5em;
          width: auto;
      `)}
      >
        <strong>{message.name}: </strong>
        {message.content}
      </div>
    );
  }
}
