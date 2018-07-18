import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div style={{
        flex: '0',
        padding: '0 30px 30px',
        width: '100%',
      }}>
        <input
          onChange={this.props.updateInput}
          onKeyPress={this.props.sendMessage}
          placeholder="Say something"
          style={{
            color: 'white',
            background: 'rgba(255, 255, 255, .25)',
            fontSize: 16,
            lineHeight: '20px',
            padding: '15px',
            border: 'none',
            borderRadius: 2,
            width: '100%',
            outline: 'none',
            '&:hover': {
              opacity: '0.5'
            },
            '@media (min-width: 768px)': {
              margin: '0 20px 0 0',
              '&:last-child': {
                margin: 0
              }
            }
          }}
          value={this.props.input}
        />
      </div>
    );
  }
}
