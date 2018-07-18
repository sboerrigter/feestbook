import React, { Component } from 'react';
import { css } from 'emotion';
import Button from './Button';
import vars from '../styles/variables';

export default class Welcome extends Component {
  componentDidMount(){
    this.field.focus();
  }

  render() {
    return (
      <div
        className={css(`
          padding: 120px 30px 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        `)}
      >
        <h1
          className={css(`
            font-weight: 200;
            line-height: 1.25;
            font-size: 2.5em;
            margin: 0 0 1em 0;

            ${vars.breakpoints.small} {
              font-size: 3em;
            }

            ${vars.breakpoints.medium} {
              font-size: 4em;
            }
          `)}
        >
          Hi there,<br/> who are you today?
        </h1>

        <input
          className={css(`
            background: transparent;
            border: none;
            outline: none;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
            font-size: 2.5em;
            margin: 0 0 1.5em 0;
            padding: 0 .25em .5em;
            color: rgba(255, 255, 255, 0.5);
            width: 100%;
            font-weight: 200;

            ${vars.breakpoints.small} {
              font-size: 3em;
            }

            ${vars.breakpoints.medium} {
              font-size: 4em;
            }
          `)}
          onChange={this.props.updateName}
          ref={(input) => { this.field = input; }}
          value={this.props.value}
        />

        <Button
          content="That's me!"
          onClick={this.props.submitName}
        />
      </div>
    );
  }
}