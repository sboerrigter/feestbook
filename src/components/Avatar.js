import React, { Component } from 'react';
import { css } from 'emotion';

export default class Avatar extends Component {
  render() {
    let mouth = (
      <path id="mouth" d="M9 30c1 .667 2 1 3 1s2-.333 3-1" stroke="#000" strokeWidth="2" strokeLinecap="round" />
    )

    return (
      <svg
        className={this.props.className}
        height="36"
        viewBox="0 0 24 36"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle id="head" cx="12" cy="24" fill="#FFD500" r="12"/>

        <path id="hat" fill={this.props.color} d="M0 0l1.6 18.003c5 0 9.403-2.004 12.403-5.841L0 0z" />

        <g id="leftEye" transform="translate(3 19)">
          <circle fill="#FFF" cx="4" cy="4" r="4"/>
          <circle fill="#000" cx="3" cy="3" r="2"/>
        </g>

        <g id="rightEye" transform="translate(13 19)">
          <circle fill="#FFF" cx="4" cy="4" r="4"/>
          <circle fill="#000" cx="5" cy="5" r="2"/>
        </g>

        {mouth}
      </svg>
    );
  }
}


