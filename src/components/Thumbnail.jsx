import { h, Component } from 'preact';


import { Icon } from 'react-icons-kit'
import { thumbsUp } from 'react-icons-kit/fa/thumbsUp'

export function Thumbnail(props) {
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
            {/* <ThumbUp/> */}
            <Icon icon={thumbsUp} />
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