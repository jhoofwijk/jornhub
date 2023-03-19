import { Thumbnail } from './Thumbnail';

export function VideoBlock({videos}) {
  return (
    <div class="grid gap-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(233px,1fr))] ">
      {videos.map(video => <Thumbnail {...video} />)}
    </div>
  )
}
