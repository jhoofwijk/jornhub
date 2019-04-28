import { h, Component } from 'preact'
import './App.css'

function Thumbnail(props) {
  return (
    <div class="myThumbnail">
      <a href={`watch.html?id=${props.id}`} title="Redhead poledancing" class="box">
        <div class="imgBox">
          <picture>
            <source type="image/webp" srcset={`/img/thumb/${props.webp}`}/>
            <source srcset={`/img/thumb/${props.img}`}/>
            <img src={`/img/thumb/${props.img}`}/>
          </picture>

          <div class="time">{props.time}</div>
          <div class="rating">
            <i class="fa fa-thumbs-up"></i>
            <span>{props.score}%</span>
          </div>
        </div>
        <div class="textbox">
          <span class="text">{props.title}</span>
        </div>
        <div class="views">{props.views} VIEWS</div>
      </a>
    </div>
  );
}

function Advertisement({img, webp}) {
  return (
    <div id="myad" class="myad">
      <a href="/ads.html">
        <picture>
          <source type="image/webp" srcset={`/img/myad/${webp}`}/>
          <source srcset={`/img/myad/${img}`}/>
          <img src={`/img/myad/${img}`}/>
        </picture>
      </a>
    </div>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Advertisement img="69.jpg" webp="69.webp"/>
      </div>
    )
  }
}
