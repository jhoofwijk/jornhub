import { render } from 'preact';

import { Header } from './components/Header';
import { sample } from './components/helpers';
import { videos } from './components/videos';
import { ads } from './components/ads';
import { Advertisement } from './components/Advertisement';
import { VideoBlock } from './components/VideoBlock';
import { Block } from './components/Block';


function WatchPage() {
  return (
    <div>
      <Header/>
      <Content/>
    </div>
    )
}
function urlParam(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null){
    return null;
  }
  else{
    return results[1] || 0;
  }
}


function Content(props) {
  const recommended = sample(videos, 5);
  const ad = sample(ads, 1);

  var videoId = urlParam("id");

  return (
    <div class="max-w-7xl m-auto">
      <Block title="Watch video">
        <div class="flex flex-row p-1">
          <div class="w-2/3 shrink-0">
            <iframe class="w-[50vw] h-[30vw] max-w-[853] max-h-[480] m-auto" src={videos[videoId].urlsrc} frameborder="0" allowfullscree="true"></iframe>
          </div>
          <div class="shrink ml-4">
            <Advertisement img={ad[0]} />
          </div>
        </div>
      </Block>

      <Block title="Recommended for you">
        <VideoBlock videos={recommended} />
      </Block>
    </div>
  );
}



const mountNode = document.getElementById('app');
render(<WatchPage />, mountNode, mountNode.lastChild);

