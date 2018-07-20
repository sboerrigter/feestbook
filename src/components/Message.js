import React, { Component } from 'react';
import { css } from 'emotion';

export default class Message extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clearity: 10,
    }
  }

  componentDidMount() {
    const now = Math.floor(Date.now());
    const timestamp = this.props.message.timestamp;
    const fadeInterval = 10 * 1000; // 10 seconds
    const clearity = Math.round(10 - (now - timestamp) / fadeInterval);

    console.log(clearity);

    this.setState(state => ({
      clearity: clearity,
    }));

    this.interval = setInterval(() => this.fade(), fadeInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fade() {
    if (this.state.clearity > 0) {
      this.setState(state => ({
        clearity: state.clearity - 1,
      }));
    }
  }

  render() {
    const alignSelf = (this.props.message.user === this.props.user) ? 'flex-end' : 'flex-start';

    return (
      <div
        className={css(`
          align-self: ${alignSelf};
          background: white;
          border-radius: 2px;
          color: #333;
          font-size: 0.9em;
          margin: 0 0 1em 0;
          opacity: ${this.state.clearity / 10};
          padding: .25em .5em;
          transition: opacity 1s linear;
          width: auto;

          @media (min-width: 640px) {
            font-size: 1em;
          }
      `)}
      >
        <strong>{this.props.message.user}: </strong>
        {this.props.message.content}
      </div>
    );
  }
}
