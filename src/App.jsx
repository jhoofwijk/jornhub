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
      <div id="container">
        <div class="blockHeader">
          Hot Jorn Videos In Netherlands
        </div>
        <div id="flexContainer">
          <VideoBlock videos={top6} id='top6'/>
          <Advertisement img={ad[0]} id='myad1'/>
        </div>
      </div>

      <div id="container">
        <div class="blockHeader">
          Most Viewed In Netherlands
        </div>
        <VideoBlock videos={mostViewed} id='mostViewed'/>
      </div>

      <div id="addBlock">
        <Advertisement img={ad[1]} id='myad2'/>
        <Advertisement img={ad[2]} id='myad3'/>
      </div>

      <div id="container">
        <div class="blockHeader">
          Recommended for you
        </div>
        <VideoBlock videos={recommended} id='recommended'/>
      </div>
    </div>
  );
}
