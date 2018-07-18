import React, { Component } from 'react';
import { css, keyframes } from 'emotion';

export default class Avatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.color,
      speaking: false,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      this.setState({
        speaking: true,
      });
    });

    document.addEventListener('keyup', (e) => {
      this.setState({
        speaking: false,
      });
    });
  }

  render() {
    let mouth = (
      <path id="mouth" d="M9 30c1 .667 2 1 3 1s2-.333 3-1" stroke="black" strokeWidth="2" strokeLinecap="round" />
    )

    if (this.state.speaking) {
      mouth = (
        <circle cx="12" cy="31" fill="black" r="3"/>
      )
    }

    const rotate = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    `

    const rotateReverse = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(-360deg); }
    `

    return (
      <svg
        className={this.props.className}
        height="36"
        viewBox="0 0 24 36"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle id="head" cx="12" cy="24" fill="#FFD500" r="12"/>

        <path id="hat" fill={this.state.color} d="M0 0l1.6 18.003c5 0 9.403-2.004 12.403-5.841L0 0z" />

        <g
          className={css(`
            animation: ${rotateReverse} 2s infinite linear;
            transform-origin: center center;
          `)}
          id="rightEye"
          x="3"
          y="19"
        >
          <circle fill="#FFF" cx="4" cy="4" r="4"/>
          <circle fill="black" cx="5" cy="5" r="2"/>
        </g>

        <g
          className={css(`
            animation: ${rotate} 3s infinite linear;
            transform-origin: center center;
          `)}
          id="rightEye"
          transform="translate(13 19)"
          x="3"
          y="19"
        >
          <circle fill="#FFF" cx="4" cy="4" r="4"/>
          <circle fill="black" cx="3" cy="3" r="2"/>
        </g>

        {mouth}
      </svg>
    );
  }
}


