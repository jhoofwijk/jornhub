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
    <div class="searchBar" style={{display: 'flex', flexDirection: 'row'}}>
      <a href="/" class="logo">
        <img src="/img/logo.png"/>
      </a>
      <form action="/" method="get" class="hidden-xs" style={{margin: '15px 20px', flexGrow: 1, display: 'flex', alignItems: 'center'}}>
        <input style={{flexGrow: 1, maxWidth: '700px', marginLeft: 'auto'}} type="text" placeholder="Search..." name="q" class="searchbox"/><button class="typeselect">
          <i class="fa fa-video-camera fa-lg"></i>
          <i class="fa fa-caret-down fa-lg"></i>
        </button><button class="submitbtn" style={{marginRight: 'auto'}}>
          <i class="fa fa-search fa-lg"></i>
        </button>
      </form>
      <a href="#" class="uploadbtn" style={{margin: '15px 20px'}}>
        <i class="fa fa-arrow-up"></i> upload
      </a>
      <a href="#" class="upgradebtn" style={{margin: '15px 20px'}}>
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

function MenuItem({active, label, skipIcon}) {
  return (
    <a href="/" style={{
      paddingBottom: active ? 0 : 2,
      borderBottom: active ? '2px solid #ffa500' : '',
    }}>
      {label}
      {skipIcon ? null : <i class="fa fa-caret-down fa-lg"></i> }
    </a>
  );
}

function MenuBar(props) {
  return (
		<div class="menuBar">
      <MenuItem label="HOME" active skipIcon/>
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

