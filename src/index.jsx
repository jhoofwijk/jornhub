import { render } from 'preact';

import { sample } from './components/helpers';
import { videos } from './components/videos';
import { ads } from './components/ads';
import { Advertisement } from './components/Advertisement';
import { VideoBlock } from './components/VideoBlock';
import { Block } from './components/Block';
import { Page } from './components/Page';


function App(props) {
  const top6 = sample(videos, 6);
  const mostViewed = sample(videos, 5);
  const recommended = sample(videos, 5);
  const ad = sample(ads, 3);

  return (
    <Page>
      <Block title="Hot Jorn Videos In Netherlands">
        <div class="flex flex-row flex-wrap">
          <div class='w-full sm:w-2/3 flex-grow max-w-3xl'>
            <VideoBlock videos={top6} />
          </div>
          <Advertisement img={ad[0]} />
        </div>
      </Block>

      <Block title="Most Viewed In Netherlands">
        <VideoBlock videos={mostViewed} />
      </Block>

      <Block>
        <div class="flex flex-row flex-wrap gap-2">
          <Advertisement img={ad[1]} />
          <Advertisement img={ad[2]} />
        </div>
      </Block>

      <Block title="Recommended for you">
        <VideoBlock videos={recommended} />
      </Block>
    </Page>
  );
}

const mountNode = document.getElementById('app');
render(<App />, mountNode, mountNode.lastChild);
