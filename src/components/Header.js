import React, { Component } from 'react';
import { css } from 'emotion';

export default class Header extends Component {
  render() {
    return (
      <div
        className={css(`
          background: linear-gradient(rgba(31, 31, 153, 1), rgba(31, 31, 153, 0));
          display: flex;
          justify-content: space-between;
          lineHeight: 40px;
          padding: 20px 30px 60px;
          position: absolute;
          width: 100%;
          z-index: 1;
        `)}
      >
        <a
          className={css(`
            font-size: 1.5rem;
            font-weight: bold;
          `)}
        >
          Feestbook
        </a>

        <a
          className={css(`
            background-color: #FF66CC;
            border-radius: 100px;
            font-size: .9em;
            font-weight: bold;
            line-height: 36px;
            padding: 0 1em;
          `)}
        >
          wtf?!
        </a>
      </div>
    );
  }
}
