import { h, Component } from 'preact';

export function Advertisement({img, id}) {
    return (
      <div id={id} class="myad">
        <a href="/ads.html">
          <img src={img}/>
        </a>
      </div>
    );
  }