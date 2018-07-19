import React, { Component } from 'react';

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
      <path d="M9 30c1 .667 2 1 3 1s2-.333 3-1" stroke="black" strokeWidth="2" strokeLinecap="round" />
    )

    if (this.state.speaking) {
      mouth = (
        <circle cx="12" cy="31" fill="black" r="3"/>
      )
    }

    return (
      <svg
        className={this.props.className}
        height="36"
        viewBox="0 0 24 36"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="24" fill="#FFD500" r="12"/>

        <path fill={this.state.color} d="M0 0l1.6 18.003c5 0 9.403-2.004 12.403-5.841L0 0z" />

        <g transform="translate(3 19)">
          <g>
            <circle fill="#FFF" cx="4" cy="4" r="4"/>
            <circle fill="black" cx="5" cy="5" r="2"/>

            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 4 4"
              to="-360 4 4"
              dur="3s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        <g
          transform="translate(13 19)"
        >
          <g>
            <circle fill="#FFF" cx="4" cy="4" r="4"/>
            <circle fill="black" cx="3" cy="3" r="2"/>

            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 4 4"
              to="360 4 4"
              dur="2s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        {mouth}
      </svg>
    );
  }
}


