import Button from './Button';
import Color from 'color';
import React, { Component } from 'react';
import { css } from 'emotion';
import vars from '../styles/variables';

export default class App extends Component {
  render() {
    return (
      <div
        className={css(`
          align-items: flex-end;
          background: ${Color(vars.darkPurple).fade(0.1)};
          display: flex;
          flex-direction: column;
          min-height: 100%;
          overflow-y: scroll;
          padding: 26px 30px 0;
          min-height: 100%;
          position: absolute;
          width: 100%;
          z-index: 2;
        `)}
      >
        <Button
          content="close"
          onClick={this.props.hideAbout}
          small
        />

        <div
          className={css(`
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin: 60px auto;
            max-width: 1000px;
            z-index: 2;

            ${vars.breakpoints.large} {
              margin: 120px auto;
            }
          `)}
        >
          <div
            className={css(`
              font-size: 1.5em;
              font-weight: 200;

              ${vars.breakpoints.large} {
                font-size: 2em;
              }
            `)}
          >
            <p>You have to be careful what you post online these days. Isn't that boring? That's why Feestbook is here. This is a place where you can do whatever you want, without having to worry about privacy... even when you are drunk!</p>

            <p>Our most important values are freedom, privacy and fun. You are completely anonymous and <strike>everything you post here will be deleted within 100 seconds</strike> (still working on that). There is no censorship and no shame here. Only wonderful people who like to have fun with others.</p>

            <p>The word "Feest" is dutch for party, so don't be shy and let's party hard! Don't worry... everything will be forgotten tomorrow.</p>
          </div>

          <Button content="Party hard!" onClick={this.props.hideAbout} />
        </div>
      </div>
    )
  }
}
