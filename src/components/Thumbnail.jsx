// import { h, Component } from 'preact';

import { EyeIcon, HandThumbUpIcon } from '@heroicons/react/20/solid'


function humanizeNumber(number) {
  if(number > 10e6) {
    return (number / 1e6).toFixed(0) + "M"
  }
  if(number > 1e6) {
    return (number / 1e6).toFixed(1) + "M"
  }
  if(number > 10e3) {
    return (number / 1e3).toFixed(0) + "K"
  }
  if(number > 1e3) {
    return (number / 1e3).toFixed(1) + "K"
  }
  return number.toFixed(0)
}


export function Thumbnail(props) {
  return (
    <div class="inline-block w-[233px] box-border m-1 h-[250px] overflow-y-hidden">
      <a href={`watch.html?id=${props.id}`} class="block">
        <div class="w-full relative">
          <img src={props.img}/>
          <div class="rounded-md bg-black/70 w-12 right-3 bottom-2 absolute text-center text-sm font-semibold">{props.time}</div>
        </div>
        <div class="text-right">
          <EyeIcon class="h-4 w-4 inline align-middle mr-1"/>
          <span class="font-semibold text-sm mr-4">{humanizeNumber(props.views)}</span>
          <HandThumbUpIcon class="h-4 w-4 inline mr-1"/>
          <span class="font-semibold text-sm align-middle">{props.score}%</span>
        </div>
        <div class="textbox">
          <span class="text">{props.title}</span>
        </div>
      </a>
    </div>
  );
}