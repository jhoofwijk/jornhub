import { render} from 'preact';

import { sample, shuffle } from './components/helpers';
import { videos } from './components/videos';
import { ads } from './components/ads';
import { Advertisement } from './components/Advertisement';
import { VideoBlock } from './components/VideoBlock';

import { Block } from './components/Block';
import { Page } from './components/Page';


function AddsPage(props) {
  const recommended = sample(videos, 5);
  const add = shuffle(ads);

  return (
    <Page>
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-row flex-wrap p-1 gap-3">
          { add.map((ad, i) => <Advertisement img={ad} key={i}/>)}
        </div>
        <Block title="Recommended for you">
          <VideoBlock videos={recommended} id='recommended'/>
        </Block>
      </div>
    </Page>
  );
}

const mountNode = document.getElementById('app');
render(<AddsPage />, mountNode, mountNode.lastChild);
