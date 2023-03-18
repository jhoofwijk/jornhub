import { Thumbnail } from './Thumbnail';

export function VideoBlock({videos}) {
    return (
      <div class="grid gap-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3">
        {videos.map(video => <Thumbnail {...video} />)}
      </div>
    )
  }
  