import { h, Component } from 'preact';
import { Thumbnail } from './Thumbnail';

export function VideoBlock({videos}) {
    return (
      <div>
        {videos.map(video => <Thumbnail {...video} />)}
      </div>
    )
  }
  