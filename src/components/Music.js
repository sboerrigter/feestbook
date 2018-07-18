import React, { Component } from 'react';

export default class Music extends Component {
  render() {
    return (
      <iframe
        style={{
          display: 'none',
        }}
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231352258&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    );
  }
}
