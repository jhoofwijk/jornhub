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
    <div>
      <div id='container'>
        <div class="blockHeader">
          Watch video
        </div>
        <div id="flexContainer">
          <div id="videoWatch">
            <iframe id="ytplayer" src={videos[videoId].urlsrc} frameborder="0" allowfullscree="true"></iframe>
          </div>
          <div id="myad1">
            <Advertisement {...ad[0]} />
          </div>
        </div>

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
