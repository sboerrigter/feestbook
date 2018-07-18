import React, { Component } from 'react';

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
      <div style={{
        background: 'white',
        borderRadius: 2,
        margin: '0 0 10px 0',
        padding: '.25em .5em',
        color: '#333',
        width: 'auto',
        opacity: this.state.clearity/100
      }}>
        <strong>{message.name}: </strong>
        {message.content}
      </div>
    );
  }
}
