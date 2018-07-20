import { autolink } from 'react-autolink';
import React, { Component } from 'react';
import { css } from 'emotion';

export default class Message extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clearity: 10,
      transition: false,
    }
  }

  componentDidMount() {
    const now = Math.floor(Date.now());
    const timestamp = this.props.message.timestamp;
    const fadeInterval = 60 * 1000; // 1 minute
    let clearity = Math.round(10 - (now - timestamp) / fadeInterval);

    if (clearity < 0) {
      clearity = 0;
    }

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
        transition: true,
      }));
    } else {
      this.setState(state => ({
        clearity: 0,
      }));

      clearInterval(this.interval);
    }
  }

  render() {
    const alignSelf = (this.props.message.user === this.props.user) ? 'flex-end' : 'flex-start';
    const opacity = this.state.clearity / 10;
    const transition = (this.state.transition) ? 'opacity 10s linear' : 'none';

    return (
      <div
        className={css(`
          align-self: ${alignSelf};
          background: white;
          border-radius: 2px;
          color: #333;
          font-size: 0.9em;
          margin: 0 0 1em 0;
          max-width: 100%;
          opacity: ${opacity};
          padding: .25em .5em;
          transition: ${transition};
          width: auto;

          @media (min-width: 640px) {
            font-size: 1em;
          }
      `)}
      >
        <strong>{this.props.message.user}: </strong>
        {autolink(this.props.message.content)}
      </div>
    );
  }
}
