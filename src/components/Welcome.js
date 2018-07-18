import React, { Component } from 'react';
import { css } from 'emotion';
import Button from './Button';

export default class Welcome extends Component {
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
            font-weight: 100;
            line-height: 1.25;
            font-size: 2.5em;
            margin: 0 0 1em 0;

            @media (min-width: 640px) {
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
            padding: .25em;
            color: rgba(255, 255, 255, 0.5);
            width: 100%;
            font-weight: 100;

            @media (min-width: 640px) {
              font-size: 4em;
            }
          `)}
          value={this.props.value}
        />

        <Button
          content="That's me!"
        />
      </div>
    );
  }
}
