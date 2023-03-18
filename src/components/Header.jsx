import { ArrowUpTrayIcon, StarIcon, ChevronDownIcon, VideoCameraIcon, MagnifyingGlassIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/20/solid'

import logo from "../img/logo.png"

function Network(props) {
  return (
    <div class="h-6 text-center text-sm overflow-hidden border-b border-primary-700">
      <b>Jornhub NETWORK</b>
      <a href="/" class="text-primary-300 ml-2 text-xs inline-block px-2 py-1 hover:text-white">JornHub</a>
      <a href="/" class="text-primary-300 ml-2 text-xs inline-block px-2 py-1 hover:text-white">YouJorn</a>
      <a href="/" class="text-primary-300 ml-2 text-xs inline-block px-2 py-1 hover:text-white">LedTube</a>
      <a href="/" class="text-primary-300 ml-2 text-xs inline-block px-2 py-1 hover:text-white">Cube8</a>
      <a href="/" class="text-primary-300 ml-2 text-xs inline-block px-2 py-1 hover:text-white">JornMD</a>
      <a href="/" class="text-primary-300 ml-2 text-xs inline-block px-2 py-1 hover:text-white">BankWire</a>
      <a href="/" class="text-primary-300 ml-2 text-xs inline-block px-2 py-1 hover:text-white">KeesMovies</a>
      <a href="/" class="text-primary-300 ml-2 text-xs inline-block px-2 py-1 hover:text-white">Jay Jorn</a>
    </div>
  );
}

function SearchBar() {
  return (
    <>
      <SearchBarDesktop/>
      <SearchBarMobile/>
    </>
  )
}

function SearchBarMobile() {
	return (
    <div class="h-12 border-b border-primary-700 md:hidden whitespace-nowrap overflow-hidden flex flex-row items-center">
      <a href="/" class="ml-3 mr-9">
        <Bars3Icon class="h-6 w-6 text-secondary"/>
      </a>

      <a href="/" class="h-[35px] w-[149px] shrink-0 mx-auto">
        <img src={logo} height="35px" width="149px"/>
      </a>

      <a href="/" class="mr-3">
        <MagnifyingGlassIcon class="h-6 w-6"/>
      </a>
      <a href="/" class="mr-3">
        <UserCircleIcon class="h-6 w-6"/>
      </a>
    </div>
  );
}

function SearchBarDesktop() {
	return (
    <div class="h-16 border-b border-primary-700 bg-primary-900 hidden md:block">
      <div class="h-16 overflow-hidden flex flex-row items-center whitespace-nowrap max-w-7xl mx-auto">
        <a href="/" class="h-[38px] w-[149px] shrink-0 mr-6">
          <img src={logo}/>
        </a>
        <form action="/" method="get" class="hidden-xs mx-15 grow items-center flex">
          <input class="rounded-l inline-block grow max-w-2xl ml-auto" type="text" placeholder="Search..." name="q"/>
          <button class="h-6 inline-block bg-white">
            <VideoCameraIcon class="h-5 w-5 text-primary-700 ml-1 inline"/>
            <ChevronDownIcon class="h-5 w-5 text-primary-700 mr-[2px] inline"/>
          </button>
          <button class="w-16 h-6 bg-secondary rounded-r">
            <MagnifyingGlassIcon class="h-5 w-5 text-primary-700 m-auto"/>
          </button>
        </form>
        <a href="#" class="whitespace-nowrap ml-4 bg-primary-700 hover:bg-primary-600 px-4 py-1 text-primary-100 rounded font-semibold">
          <ArrowUpTrayIcon class="h-5 w-5 inline"/> upload
        </a>
        <a href="#" class="whitespace-nowrap mx-2 bg-secondary px-4 py-1 text-primary-700 rounded font-semibold">
          <StarIcon class="h-5 w-5 inline"/> upgrade
        </a>

        <div class="">
          <a href="#" class="m-2 hover:text-primary-300">EN <ChevronDownIcon class="h-5 w-5 inline"/></a>
          <a href="#" class="m-2 hover:text-primary-300">Log in</a>
          <a href="#" class="m-2 hover:text-primary-300">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

function MenuItem({active, label, icon}) {
  return (
    <a href="/" class={`border-secondary w-32 text-center align-middle leading-10 h-10 text-xs font-semibold ${active ? "border-b-2" : "pb-[2px]"}`}>
      {label}
      {icon ? <ChevronDownIcon class="h-4 w-4 inline"/> : null }
    </a>
  );
}

function MenuBar(props) {
  return (
		<div class="h-10 border-b border-primary-700 overflow-hidden whitespace-nowrap bg-primary-900 hidden md:flex items-center justify-center">
      <MenuItem label="HOME" active/>
      <MenuItem label="VIDEOS" icon/>
      <MenuItem label="CATEGORIES" icon/>
      <MenuItem label="LIVE" icon/>
      <MenuItem label="PREMIUM HD" icon/>
      <MenuItem label="MEAT&amp;DUCK" icon/>
      <MenuItem label="COMMUNITY" icon/>
      <MenuItem label="PHOTOS&amp;GIFS" icon/>
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

