import Avatar from './Avatar';
import Button from './Button';
import React, { Component } from 'react';
import variables from '../styles/variables';
import { css } from 'emotion';

export default class Header extends Component {
  render() {
    return (
      <div
        className={css(`
          align-items: flex-end;
          background: linear-gradient(rgba(31, 31, 153, 1), rgba(31, 31, 153, 0));
          display: flex;
          justify-content: space-between;
          padding: 25px 30px 60px;
          position: absolute;
          width: 100%;
          z-index: 1;
        `)}
      >
        <Avatar
          className={css(`
            margin: 0 1rem 0 0;
          `)}
          color={variables.pink}
        />

        <a
          className={css(`
            font-size: 1.5em;
            line-height: 1em;
            font-weight: bold;
            margin-right: auto;
          `)}
        >
          Feestbook
        </a>

        <Button
          href="http://www.staggeringbeauty.com/"
          content="wtf?!"
          small
        />
      </div>
    );
  }
}
