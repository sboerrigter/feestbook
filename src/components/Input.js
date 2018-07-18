import React, { Component } from 'react';
import { css } from 'emotion';

export default class Input extends Component {
  componentDidMount(){
      this.nameInput.focus();
    }

  render() {
    return (
      <div style={{
        flex: '0',
        padding: '0 30px 30px',
        width: '100%',
      }}>
        <input
           className={css(`
            background: rgba(255, 255, 255, .1);
            border-radius: 3px;
            border: none;
            color: white;
            font-size: 1em;
            line-height: 20px;
            outline: none;
            padding: 15px;
            width: 100%;

            ::placeholder {
              color: rgba(255, 255, 255, .25);
            }
          `)}
          onChange={this.props.updateInput}
          onKeyPress={this.props.sendMessage}
          placeholder="Say something"
          ref={(input) => { this.nameInput = input; }}
          value={this.props.input}
        />
      </div>
    );
  }
}
