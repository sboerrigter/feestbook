import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        lineHeight: '40px',
        padding: '20px 30px',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
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
