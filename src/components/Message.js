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
    const alignSelf = (message.user == this.props.user) ? 'flex-end' : 'flex-start';

    return (
      <div
        className={css(`
          align-self: ${alignSelf};
          background: white;
          border-radius: 2px;
          color: #333;
          font-size: 0.9em;
          margin: 0 0 1em 0;
          opacity: ${this.state.clearity/100};
          padding: .25em .5em;
          transition: opacity 1s linear;
          width: auto;

          @media (min-width: 640px) {
            font-size: 1em;
          }
      `)}
      >
        <strong>{message.user}: </strong>
        {message.content}
      </div>
    );
  }
}
