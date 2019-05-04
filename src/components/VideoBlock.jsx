import { h, Component } from 'preact';
import { Thumbnail } from './Thumbnail';

export function VideoBlock({videos, id}) {
    return (
      <div id={id}>
        {videos.map(video => <Thumbnail {...video} />)}
      </div>
    )
  }
  