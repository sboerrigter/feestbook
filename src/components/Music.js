import React, { Component } from 'react';
import { css } from 'emotion';

export default class Music extends Component {
  render() {
    return (
      <iframe
        allow="autoplay"
        className={css(`
          position: absolute;
          z-index: -1;
        `)}
        height="0"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231352258&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="Background Music"
        width="0"
      ></iframe>
    );
  }
}
