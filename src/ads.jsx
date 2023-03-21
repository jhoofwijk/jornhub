import { render} from 'preact';

import { Header } from './components/Header';
import { sample, shuffle } from './components/helpers';
import { videos } from './components/videos';
import { ads } from './components/ads';
import { Advertisement } from './components/Advertisement';
import { VideoBlock } from './components/VideoBlock';

import { Block } from './components/Block';
import { BgHearts } from './components/BackgroundHearts';


function AddsPage() {
  return (
    <div>
      <BgHearts/>
      <Header/>
      <Content/>
    </div>
    )
}


function Content(props) {
  const recommended = sample(videos, 5);
  const add = shuffle(ads);

  return (
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-row flex-wrap p-1 gap-3">
        { add.map((ad, i) => <Advertisement img={ad} key={i}/>)}
      </div>
      <Block title="Recommended for you">
        <VideoBlock videos={recommended} id='recommended'/>
      </Block>
    </div>
  );
}

const mountNode = document.getElementById('app');
render(<AddsPage />, mountNode, mountNode.lastChild);
