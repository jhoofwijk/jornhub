import { h, Component } from 'preact';
import './bootstrap.css';
import './font-awesome.css';
import './App.css';

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

function VideoBlock({videos, id}) {
  return (
    <div id={id}>
      {videos.map(video => <Thumbnail {...video} />)}
    </div>
  )
}

function Advertisement({img, webp, id}) {
  return (
    <div id={id} class="myad">
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
      <a href="/">JornHub</a>
      <a href="/">YouJorn</a>
      <a href="/">LedTube</a>
      <a href="/">Cube8</a>
      <a href="/">JornMD</a>
      <a href="/">BankWire</a>
      <a href="/">KeesMovies</a>
      <a href="/">Jay Jorn</a>
    </div>
  );
}

function SearchBar(props) {
	return (
    <div class="searchBar">
      <a href="/" class="logo">
        <img src="/img/logo.png"/>
      </a>
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

function MenuItem({active, label}) {
  return (
    <a href="/" style={{
      paddingBottom: active ? 0 : 2,
      borderBottom: active ? '2px solid #ffa500' : '',
    }}>
      {label}
      <i class="fa fa-caret-down fa-lg"></i>
    </a>
  );
}

function MenuBar(props) {
  return (
		<div class="menuBar">
      <MenuItem label="HOME" active={true}/>
      <MenuItem label="VIDEOS"/>
      <MenuItem label="CATEGORIES"/>
      <MenuItem label="LIVE"/>
      <MenuItem label="PREMIUM HD"/>
      <MenuItem label="MEAT&amp;DUCK"/>
      <MenuItem label="COMMUNITY"/>
      <MenuItem label="PHOTOS&amp;GIFS"/>
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

const videos = [
  { title: "Young black chick",                      time: "3:01", url: "dnIIA-6Kts0", img: "alfred.png" }, 
  { title: "Youngest interracial on the internet",   time: "1:04", url: "uZpmokW7ZY4", img: "calimero.png" }, 
  { title: "Uncle Fucker",                           time: "1:02", url: "VsMcdEswK8k", img: "uncle.png" }, 
  { title: "Big cock with 5 young chicks",           time: "0:37", url: "WzTVkcHZkNE", img: "cock.png" }, 
  { title: "Hottest chicks available",               time: "2:28", url: "rI8vc-f8LCU", img: "bbq.png" }, 
  { title: "Knoxville Gay Dildo",                    time: "0:55", url: "g3eCHzFGXLg", img: "dildo.png" }, 
  { title: "Redhead poledancing",                    time: "9:27", url: "lZAWFajua7g", img: "pole.png" }, 
  { title: "Brunette striptease",                    time: "6:26", url: "A0yOGaTcPUw", img: "strip.png" }, 
  { title: "Californian Red Hot Topless Quaddruple", time: "5:21", url: "YlUKcNNmywk", img: "chili.png" }, 
  { title: "Sexy Green String",                      time: "3:12", url: "iYlwzmj0dkw", img: "mankini.png" }, 
  { title: "MILF in lingerie",                       time: "4:00", url: "iwLaxZj8THw", img: "milf.png" }, 
  { title: "Blonde Hairy Jorn",                      time: "8:41", url: "dEtyaC6ltQg", img: "star.png" }, 
  { title: "Sexy teen with one ball",                time: "3:47", url: "qPd1YWTSwE0", img: "kud.png" }
];

videos.forEach((el,i) => {
  el.id = i;
  el.score = Math.round(Math.random() * 30 + 70)
  el.views = Math.round(Math.random() * 2000000 + 100000)
  el.webp = el.img.replace('png', 'webp');
});

var ads = "69.jpg  difference.jpg  DIY.jpg  nothing.jpg  priest.jpg  self.jpg  unemployed2.jpg  doneright.png".split("  ");
ads = ads.map(value => {
  return {
    img: value,
    webp: value.replace(/(jpg|png)/gi, 'webp')
  }
});


function shuffle(arr) {
  let ret = Array.from(arr);
  ret.sort(() => (Math.random() > 0.5) ? 1: -1)
  return ret;
}

function sample(arr, count) {
  let shuffled = shuffle(arr)
  return shuffled.filter((v, i) => i < count);
}



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

// TODO add css baseline

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
          <Advertisement {...ad[0]} id='myad1'/>
        </div>
      </div>

      <div id="container">
        <div class="blockHeader">
          Most Viewed In Netherlands
        </div>
        <VideoBlock videos={mostViewed} id='mostViewed'/>
      </div>

      <div id="addBlock">
        <Advertisement {...ad[1]} id='myad2'/>
        <Advertisement {...ad[2]} id='myad3'/>
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
