import Button from './Button';
import React, { Component } from 'react';
import { css } from 'emotion';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>You have to be careful what you post online these days. Isn't that boring? That's why Feestbook is here. This is a place where you can do whatever you want, without having to worry about privacy... even when you are drunk!</p>

        <p>Our most important values are freedom, privacy and fun. You are completely anonymous and everything you post here will be deleted within 100 seconds. There is no censorship and no shame here. Only wonderful people who like to have fun with others.</p>

        <p>The word "Feest" is dutch for party, so don't be shy and let's party hard! Don't worry... everything will be forgotten tomorrow.</p>

        <Button content="Party hard!" onClick={this.props.hideAbout} />
      </div>
    )
  }
}
