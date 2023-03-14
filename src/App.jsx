import { h, Component } from 'preact';

import { Header } from './components/Header';
import { sample } from './components/helpers';
import { videos } from './components/videos';
import { ads } from './components/ads';
import { Advertisement } from './components/Advertisement';
import { VideoBlock } from './components/VideoBlock';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

function Content(props) {
  const top6 = sample(videos, 6);
  const mostViewed = sample(videos, 5);
  const recommended = sample(videos, 5);
  const ad = sample(ads, 3);

  return (
    <div>
      <div class="m-2">
        <div class="text-4xl">
          Hot Jorn Videos In Netherlands
        </div>
        <div class="flex flex-row flex-wrap p-1">
          <div class='w-[66vw] max-w-[750] flex-grow'>
            <VideoBlock videos={top6} />
          </div>
          <Advertisement img={ad[0]} />
        </div>
      </div>

      <div id="m-2">
        <div class="text-4xl">
          Most Viewed In Netherlands
        </div>
        <VideoBlock videos={mostViewed} id='mostViewed'/>
      </div>

      <div class="flex flex-row flex-wrap p-1 bg-gray-900">
        <Advertisement img={ad[1]} />
        <Advertisement img={ad[2]} />
      </div>

      <div id="m-2">
        <div class="text-4xl">
          Recommended for you
        </div>
        <VideoBlock videos={recommended} id='recommended'/>
      </div>
    </div>
  );
}
