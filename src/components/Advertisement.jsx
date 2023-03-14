// import { h, Component } from 'preact';

export function Advertisement({img, id}) {
    return (
      <div id={id} class="m-auto border-dotted border-4 animate-flicker">
        <a href="/ads.html">
          <img src={img} class="max-w-[30vw] max-h-96"/>
        </a>
      </div>
    );
  }