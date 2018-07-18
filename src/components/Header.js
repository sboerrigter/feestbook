import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div style={{
        alignItems: 'space-between',
        display: 'flex',
        position: 'absolute',
        width: '100%',
      }}>
        <a style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}>
          Feestbook
        </a>

        <a>
          WTF?!
        </a>
      </div>
    );
  }
}
