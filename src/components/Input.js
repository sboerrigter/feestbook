import React, { Component } from 'react';
import { css } from 'emotion';

export default class Input extends Component {
  componentDidMount(){
    this.field.focus();
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
            background: rgba(255, 255, 255, .05);
            border-radius: 3px;
            border: none;
            color: white;
            font-size: 1em;
            outline: none;
            padding: 1em;
            width: 100%;

            :focus {
              background: rgba(255, 255, 255, .1);
            }

            ::placeholder {
              color: rgba(255, 255, 255, .5);
            }
          `)}
          onChange={this.props.updateMessage}
          onKeyPress={this.props.sutmitMessage}
          placeholder="Say something"
          ref={(input) => { this.field = input; }}
          value={this.props.value}
        />
      </div>
    );
  }
}
