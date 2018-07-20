import Color from 'color';
import React, { Component } from 'react';
import variables from '../styles/variables';
import { css } from 'emotion';

export default class Button extends Component {
  constructor(props) {
    super(props)

    if (this.props.small) {
      this.state = {
        fontSize: '0.9em',
        padding: '.5em 1em',
      }
    } else {
      this.state = {
        fontSize: '1em',
        padding: '1em 2.5em',
      }
    }
  }

  render() {
    return (
      <a
        className={css(`
          background: ${variables.pink};
          border-radius: 100px;
          color: white;
          cursor: pointer;
          font-size: ${this.state.fontSize};
          font-weight: 600;
          padding: ${this.state.padding};
          text-decoration: none;
          transition: background-color .3s;


          :active,
          :focus,
          :hover,
          :visited {
            background: ${Color(variables.pink).darken(0.1)};
            color: white;
          }
        `)}
        href={this.props.href}
        onClick={this.props.onClick}
      >
        {this.props.content}
      </a>
    );
  }
}



