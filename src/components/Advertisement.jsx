import { h, Component } from 'preact';

export function Advertisement({img, webp, id}) {
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