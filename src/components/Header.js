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

        <a style={{
          backgroundColor: '#FF66CC',
          padding: '0 1em',
          lineHeight: '36px',
          height: '36px',
          borderRadius: 100,
          fontWeight: 500,
        }}>
          wtf?!
        </a>
      </div>
    );
  }
}
