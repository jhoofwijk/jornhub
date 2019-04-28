import { h, Component } from 'preact'
import './App.css'

const inTrain = true;

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

function Network(props) {
  return (
    <div class="topBar">
      <b>Jornhub NETWORK</b>
      <a href="/" class="partner">JornHub</a>
      <a href="/" class="partner">YouJorn</a>
      <a href="/" class="partner">LedTube</a>
      <a href="/" class="partner">Cube8</a>
      <a href="/" class="partner">JornMD</a>
      <a href="/" class="partner">BankWire</a>
      <a href="/" class="partner">KeesMovies</a>
      <a href="/" class="partner">Jay Jorn</a>
    </div>
  );
}

function SearchBar(props) {
	return (
    <div class="searchBar">
      {
        inTrain ? null : 
        <a href="/" class="logo">
          <img src="/img/logo.png"/>
        </a>
      }
      <form action="/" method="get" class="hidden-xs">
        <input type="text" placeholder="Search..." name="q" class="searchbox"/><button class="typeselect">
          <i class="fa fa-video-camera fa-lg"></i>
          <i class="fa fa-caret-down fa-lg"></i>
        </button><button class="submitbtn">
          <i class="fa fa-search fa-lg"></i>
        </button>
      </form>
      <a href="#" class="uploadbtn">
        <i class="fa fa-arrow-up"></i> upload
      </a>
      <a href="#" class="upgradebtn">
        <i class="fa fa-star"></i>  upgrade
      </a>
      <div class="pull-right">
        <a href="#">EN<i class="fa fa-caret-down fa-lg"></i></a>
        <a href="#">Loggin</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
}

function MenuBar(props) {
  return (
		<div class="menuBar">
      <a href="/" class="active">HOME</a>
      <a href="/">VIDEOS<i class="fa fa-caret-down fa-lg"></i></a>
      <a href="/">CATEGORIES<i class="fa fa-caret-down fa-lg"></i></a>
      <a href="/">LIVE<i class="fa fa-caret-down fa-lg"></i></a>
      <a href="/">PREMIUM HD<i class="fa fa-caret-down fa-lg"></i></a>
      <a href="/">MEAT&amp;DUCK<i class="fa fa-caret-down fa-lg"></i></a>
      <a href="/">COMMUNITY<i class="fa fa-caret-down fa-lg"></i></a>
      <a href="/">PHOTOS&amp;GIFS<i class="fa fa-caret-down fa-lg"></i></a>
    </div>
  );
}

function Header() {
  return (
    <div>
      <Network/>
      <SearchBar/>
      <MenuBar/>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}
