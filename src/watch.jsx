import { render } from 'preact';

import { sample } from './components/helpers';
import { videos } from './components/videos';
import { ads } from './components/ads';
import { Advertisement } from './components/Advertisement';
import { VideoBlock } from './components/VideoBlock';
import { Block } from './components/Block';
import { Page } from './components/Page';


function urlParam(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null){
    return null;
  }
  else{
    return results[1] || 0;
  }
}


function WatchPage(props) {
  const recommended = sample(videos, 5);
  const ad = sample(ads, 3);

  var videoId = urlParam("id");

  return (
    <Page>
      <div class="max-w-7xl m-auto">
        <Block title="Watch video">
          <div class="flex flex-row gap-5">
            <div class="w-full md:w-2/3 flex-grow shrink-0">
              <iframe class="w-full max-w-[853] m-auto aspect-video" src={videos[videoId].urlsrc} frameborder="0" allowfullscree="true"></iframe>
            </div>
            <div class="mx-auto hidden lg:block">
              <Advertisement img={ad[0]} />
            </div>
          </div>
        </Block>

        <Block title="Recommended for you">
          <VideoBlock videos={recommended} />
        </Block>

        <Block>
          <div class="flex flex-row flex-wrap gap-2">
            <Advertisement img={ad[1]} />
            <Advertisement img={ad[2]} />
          </div>
        </Block>
      </div>
    </Page>
  );
}



const mountNode = document.getElementById('app');
render(<WatchPage />, mountNode, mountNode.lastChild);

