import { h, Component } from 'preact';

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
        <input type="text" placeholder="Search..." name="q" class="searchbox"/><button class="typeselect" style={{paddingTop: 3}}>
          <i class="fa fa-video-camera fa-lg"></i>
          <i class="fa fa-caret-down fa-lg"></i>
        </button><button class="submitbtn" style={{paddingTop: 3}}>
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

export function Header() {
  return (
    <div>
      <Network/>
      <SearchBar/>
      <MenuBar/>
    </div>
  )
}

