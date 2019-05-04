import { h, Component } from 'preact';
import './bootstrap.css';
import './font-awesome.css';
import './App.css';

import { Header } from './components/Header';
import { sample, shuffle } from './components/helpers';
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
  const recommended = sample(videos, 5);
  const add = shuffle(ads);

  return (
    <div>
      <div id='container'>
        <div class="blockHeader">
          Watch video
        </div>
        <div id="flexContainer">
          <div id="myad1">
            {
                add.map(ad => 
                    <Advertisement {...ad} />
                )
            }
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
