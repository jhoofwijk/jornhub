parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OmAK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=exports.h=r,exports.cloneElement=s,exports.createRef=j,exports.Component=R,exports.render=H,exports.rerender=d,exports.options=exports.default=void 0;var e=function(){},t={};exports.options=t;var n=[],o=[];function r(r,i){var l,a,s,p,c=o;for(p=arguments.length;p-- >2;)n.push(arguments[p]);for(i&&null!=i.children&&(n.length||n.push(i.children),delete i.children);n.length;)if((a=n.pop())&&void 0!==a.pop)for(p=a.length;p--;)n.push(a[p]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof r)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&l?c[c.length-1]+=a:c===o?c=[a]:c.push(a),l=s;var u=new e;return u.nodeName=r,u.children=c,u.attributes=null==i?void 0:i,u.key=null==i?void 0:i.key,void 0!==t.vnode&&t.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function s(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,c=[];function u(e){!e._dirty&&(e._dirty=!0)&&1==c.push(e)&&(t.debounceRendering||a)(d)}function d(){for(var e;e=c.pop();)e._dirty&&D(e)}function f(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&v(e,t.nodeName):n||e._componentConstructor===t.nodeName}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function m(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function _(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)l(n,null),l(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===p.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,b,a):e.removeEventListener(t,b,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(c){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var s=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function b(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var x=[],g=0,C=!1,N=!1;function w(){for(var e;e=x.shift();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,o,r,i){g++||(C=null!=r&&void 0!==r.ownerSVGElement,N=null!=e&&!("__preactattr_"in e));var l=S(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--g||(N=!1,i||w()),l}function S(e,t,n,o,r){var i=e,l=C;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return V(e,t,n,o);if(C="svg"===a||"foreignObject"!==a&&C,a=String(a),(!e||!v(e,a))&&(i=_(a,C),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0)}var s=i.firstChild,p=i.__preactattr_,c=t.children;if(null==p){p=i.__preactattr_={};for(var u=i.attributes,d=u.length;d--;)p[u[d].name]=u[d].value}return!N&&c&&1===c.length&&"string"==typeof c[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=c[0]&&(s.nodeValue=c[0]):(c&&c.length||null!=s)&&U(i,c,n,o,N||null!=p.dangerouslySetInnerHTML),L(i,t.attributes,p),C=l,i}function U(e,t,n,o,r){var i,l,a,s,p,c=e.childNodes,u=[],d={},v=0,m=0,_=c.length,y=0,b=t?t.length:0;if(0!==_)for(var x=0;x<_;x++){var g=c[x],C=g.__preactattr_;null!=(N=b&&C?g._component?g._component.__key:C.key:null)?(v++,d[N]=g):(C||(void 0!==g.splitText?!r||g.nodeValue.trim():r))&&(u[y++]=g)}if(0!==b)for(x=0;x<b;x++){var N;if(p=null,null!=(N=(s=t[x]).key))v&&void 0!==d[N]&&(p=d[N],d[N]=void 0,v--);else if(m<y)for(i=m;i<y;i++)if(void 0!==u[i]&&f(l=u[i],s,r)){p=l,u[i]=void 0,i===y-1&&y--,i===m&&m++;break}p=S(p,s,n,o),a=c[x],p&&p!==e&&p!==a&&(null==a?e.appendChild(p):p===a.nextSibling?h(a):e.insertBefore(p,a))}if(v)for(var x in d)void 0!==d[x]&&P(d[x],!1);for(;m<=y;)void 0!==(p=u[y--])&&P(p,!1)}function P(e,t){var n=e._component;n?A(n):(null!=e.__preactattr_&&l(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||h(e),B(e))}function B(e){for(e=e.lastChild;e;){var t=e.previousSibling;P(e,!0),e=t}}function L(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||y(e,o,n[o],n[o]=void 0,C);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||y(e,o,n[o],n[o]=t[o],C)}var M=[];function T(e,t,n){var o,r=M.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),R.call(o,t,n)):((o=new R(t,n)).constructor=e,o.render=E);r--;)if(M[r].constructor===e)return o.nextBase=M[r].nextBase,M.splice(r,1),o;return o}function E(e,t,n){return this.constructor(e,n)}function W(e,n,o,r,i){e._disable||(e._disable=!0,e.__ref=n.ref,e.__key=n.key,delete n.ref,delete n.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?u(e):D(e,1,i)),l(e.__ref,e))}function D(e,n,o,r){if(!e._disable){var l,a,s,p=e.props,c=e.state,u=e.context,d=e.prevProps||p,f=e.prevState||c,v=e.prevContext||u,_=e.base,h=e.nextBase,y=_||h,b=e._component,C=!1,N=v;if(e.constructor.getDerivedStateFromProps&&(c=i(i({},c),e.constructor.getDerivedStateFromProps(p,c)),e.state=c),_&&(e.props=d,e.state=f,e.context=v,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,u)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,u),e.props=p,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){l=e.render(p,c,u),e.getChildContext&&(u=i(i({},u),e.getChildContext())),_&&e.getSnapshotBeforeUpdate&&(N=e.getSnapshotBeforeUpdate(d,f));var S,U,B=l&&l.nodeName;if("function"==typeof B){var L=m(l);(a=b)&&a.constructor===B&&L.key==a.__key?W(a,L,1,u,!1):(S=a,e._component=a=T(B,L,u),a.nextBase=a.nextBase||h,a._parentComponent=e,W(a,L,0,u,!1),D(a,1,o,!0)),U=a.base}else s=y,(S=b)&&(s=e._component=null),(y||1===n)&&(s&&(s._component=null),U=k(s,l,u,o||!_,y&&y.parentNode,!0));if(y&&U!==y&&a!==b){var M=y.parentNode;M&&U!==M&&(M.replaceChild(U,y),S||(y._component=null,P(y,!1)))}if(S&&A(S),e.base=U,U&&!r){for(var E=e,V=e;V=V._parentComponent;)(E=V).base=U;U._component=E,U._componentConstructor=E.constructor}}for(!_||o?x.push(e):C||(e.componentDidUpdate&&e.componentDidUpdate(d,f,N),t.afterUpdate&&t.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);g||r||w()}}function V(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,p=m(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(W(r,p,3,n,o),e=r.base):(i&&!a&&(A(i),e=l=null),r=T(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),W(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,P(l,!1))),e}function A(e){t.beforeUnmount&&t.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?A(o):n&&(null!=n.__preactattr_&&l(n.__preactattr_.ref,null),e.nextBase=n,h(n),M.push(e),B(n)),l(e.__ref,null)}function R(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function H(e,t,n){return k(n,e,{},!1,t,!1)}function j(){return{}}i(R.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=i(i({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),u(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),D(this,2)},render:function(){}});var z={h:r,createElement:r,cloneElement:s,createRef:j,Component:R,render:H,rerender:d,options:t},F=z;exports.default=F;
},{}],"4yAq":[function(require,module,exports) {

},{}],"7CfB":[function(require,module,exports) {

},{}],"E+qH":[function(require,module,exports) {

},{}],"yjEo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Header=s;var a=require("preact");function e(e){return(0,a.h)("div",{class:"topBar"},(0,a.h)("b",null,"Jornhub NETWORK"),(0,a.h)("a",{href:"/"},"JornHub"),(0,a.h)("a",{href:"/"},"YouJorn"),(0,a.h)("a",{href:"/"},"LedTube"),(0,a.h)("a",{href:"/"},"Cube8"),(0,a.h)("a",{href:"/"},"JornMD"),(0,a.h)("a",{href:"/"},"BankWire"),(0,a.h)("a",{href:"/"},"KeesMovies"),(0,a.h)("a",{href:"/"},"Jay Jorn"))}function h(e){return(0,a.h)("div",{class:"searchBar"},(0,a.h)("a",{href:"/",class:"logo"},(0,a.h)("img",{src:"/img/logo.png"})),(0,a.h)("form",{action:"/",method:"get",class:"hidden-xs"},(0,a.h)("input",{type:"text",placeholder:"Search...",name:"q",class:"searchbox"}),(0,a.h)("button",{class:"typeselect",style:{paddingTop:3}},(0,a.h)("i",{class:"fa fa-video-camera fa-lg"}),(0,a.h)("i",{class:"fa fa-caret-down fa-lg"})),(0,a.h)("button",{class:"submitbtn",style:{paddingTop:3}},(0,a.h)("i",{class:"fa fa-search fa-lg"}))),(0,a.h)("a",{href:"#",class:"uploadbtn"},(0,a.h)("i",{class:"fa fa-arrow-up"})," upload"),(0,a.h)("a",{href:"#",class:"upgradebtn"},(0,a.h)("i",{class:"fa fa-star"}),"  upgrade"),(0,a.h)("div",{class:"pull-right"},(0,a.h)("a",{href:"#"},"EN",(0,a.h)("i",{class:"fa fa-caret-down fa-lg"})),(0,a.h)("a",{href:"#"},"Loggin"),(0,a.h)("a",{href:"#"},"Sign Up")))}function l(e){var h=e.active,l=e.label;return(0,a.h)("a",{href:"/",style:{paddingBottom:h?0:2,borderBottom:h?"2px solid #ffa500":""}},l,(0,a.h)("i",{class:"fa fa-caret-down fa-lg"}))}function r(e){return(0,a.h)("div",{class:"menuBar"},(0,a.h)(l,{label:"HOME",active:!0}),(0,a.h)(l,{label:"VIDEOS"}),(0,a.h)(l,{label:"CATEGORIES"}),(0,a.h)(l,{label:"LIVE"}),(0,a.h)(l,{label:"PREMIUM HD"}),(0,a.h)(l,{label:"MEAT&DUCK"}),(0,a.h)(l,{label:"COMMUNITY"}),(0,a.h)(l,{label:"PHOTOS&GIFS"}))}function s(){return(0,a.h)("div",null,(0,a.h)(e,null),(0,a.h)(h,null),(0,a.h)(r,null))}
},{"preact":"OmAK"}],"in3j":[function(require,module,exports) {
"use strict";function r(r){for(var e=Array.from(r),t=e.length-1;t>0;t--){var o=Math.floor(Math.random()*(t+1)),n=[e[o],e[t]];e[t]=n[0],e[o]=n[1]}return e}function e(e,t){return r(e).filter(function(r,e){return e<t})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shuffle=r,exports.sample=e;
},{}],"/gBX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.videos=void 0;var e=[{title:"Young black chick",time:"3:01",url:"dnIIA-6Kts0",img:"alfred.png"},{title:"Youngest interracial on the internet",time:"1:04",url:"uZpmokW7ZY4",img:"calimero.png"},{title:"Uncle Fucker",time:"1:02",url:"VsMcdEswK8k",img:"uncle.png"},{title:"Big cock with 5 young chicks",time:"0:37",url:"WzTVkcHZkNE",img:"cock.png"},{title:"Hottest chicks available",time:"2:28",url:"rI8vc-f8LCU",img:"bbq.png"},{title:"Knoxville Gay Dildo",time:"0:55",url:"g3eCHzFGXLg",img:"dildo.png"},{title:"Redhead poledancing",time:"9:27",url:"lZAWFajua7g",img:"pole.png"},{title:"Brunette striptease",time:"6:26",url:"A0yOGaTcPUw",img:"strip.png"},{title:"Californian Red Hot Topless Quaddruple",time:"5:21",url:"YlUKcNNmywk",img:"chili.png"},{title:"Sexy Green String",time:"3:12",url:"iYlwzmj0dkw",img:"mankini.png"},{title:"MILF in lingerie",time:"4:00",url:"iwLaxZj8THw",img:"milf.png"},{title:"Blonde Hairy Jorn",time:"8:41",url:"dEtyaC6ltQg",img:"star.png"},{title:"Sexy teen with one ball",time:"3:47",url:"qPd1YWTSwE0",img:"kud.png"}];exports.videos=e,e.forEach(function(e,i){e.id=i,e.score=Math.round(30*Math.random()+70),e.views=Math.round(2e6*Math.random()+1e5),e.webp=e.img.replace("png","webp"),e.urlsrc="https://www.youtube.com/embed/"+e.url});
},{}],"FuQe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ads=void 0;var e="69.jpg  difference.jpg  DIY.jpg  nothing.jpg  priest.jpg  self.jpg  unemployed2.jpg  doneright.png".split("  ");exports.ads=e,exports.ads=e=e.map(function(e){return{img:e,webp:e.replace(/(jpg|png)/gi,"webp")}});
},{}],"HBHQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Advertisement=r;var e=require("preact");function r(r){var t=r.img,c=r.webp,s=r.id;return(0,e.h)("div",{id:s,class:"myad"},(0,e.h)("a",{href:"/ads.html"},(0,e.h)("picture",null,(0,e.h)("source",{type:"image/webp",srcset:"/img/myad/".concat(c)}),(0,e.h)("source",{srcset:"/img/myad/".concat(t)}),(0,e.h)("img",{src:"/img/myad/".concat(t)}))))}
},{"preact":"OmAK"}],"d7Yu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Thumbnail=s;var e=require("preact");function s(s){return(0,e.h)("div",{class:"myThumbnail"},(0,e.h)("a",{href:"watch.html?id=".concat(s.id),title:"Redhead poledancing",class:"box"},(0,e.h)("div",{class:"imgBox"},(0,e.h)("picture",null,(0,e.h)("source",{type:"image/webp",srcset:"/img/thumb/".concat(s.webp)}),(0,e.h)("source",{srcset:"/img/thumb/".concat(s.img)}),(0,e.h)("img",{src:"/img/thumb/".concat(s.img)})),(0,e.h)("div",{class:"time"},s.time),(0,e.h)("div",{class:"rating"},(0,e.h)("i",{class:"fa fa-thumbs-up"}),(0,e.h)("span",null,s.score,"%"))),(0,e.h)("div",{class:"textbox"},(0,e.h)("span",{class:"text"},s.title)),(0,e.h)("div",{class:"views"},s.views," VIEWS")))}
},{"preact":"OmAK"}],"1PIQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VideoBlock=i;var e=require("preact"),r=require("./Thumbnail");function i(i){var t=i.videos,u=i.id;return(0,e.h)("div",{id:u},t.map(function(i){return(0,e.h)(r.Thumbnail,i)}))}
},{"preact":"OmAK","./Thumbnail":"d7Yu"}],"0+DP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact");require("./bootstrap.css"),require("./font-awesome.css"),require("./App.css");var t=require("./components/Header"),o=require("./components/helpers"),r=require("./components/videos"),n=require("./components/ads"),i=require("./components/Advertisement"),c=require("./components/VideoBlock"),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,o){return t&&a(e.prototype,t),o&&a(e,o),e}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(o){function r(){return d(this,r),p(this,v(r).apply(this,arguments))}return y(r,e.Component),l(r,[{key:"render",value:function(){return(0,e.h)("div",null,(0,e.h)(t.Header,null),(0,e.h)(b,null))}}]),r}();function b(t){var u=(0,o.sample)(r.videos,6),d=(0,o.sample)(r.videos,5),a=(0,o.sample)(r.videos,5),l=(0,o.sample)(n.ads,3);return(0,e.h)("div",null,(0,e.h)("div",{id:"container"},(0,e.h)("div",{class:"blockHeader"},"Hot Jorn Videos In Netherlands"),(0,e.h)("div",{id:"flexContainer"},(0,e.h)(c.VideoBlock,{videos:u,id:"top6"}),(0,e.h)(i.Advertisement,s({},l[0],{id:"myad1"})))),(0,e.h)("div",{id:"container"},(0,e.h)("div",{class:"blockHeader"},"Most Viewed In Netherlands"),(0,e.h)(c.VideoBlock,{videos:d,id:"mostViewed"})),(0,e.h)("div",{id:"addBlock"},(0,e.h)(i.Advertisement,s({},l[1],{id:"myad2"})),(0,e.h)(i.Advertisement,s({},l[2],{id:"myad3"}))),(0,e.h)("div",{id:"container"},(0,e.h)("div",{class:"blockHeader"},"Recommended for you"),(0,e.h)(c.VideoBlock,{videos:a,id:"recommended"})))}exports.default=m;
},{"preact":"OmAK","./bootstrap.css":"4yAq","./font-awesome.css":"7CfB","./App.css":"E+qH","./components/Header":"yjEo","./components/helpers":"in3j","./components/videos":"/gBX","./components/ads":"FuQe","./components/Advertisement":"HBHQ","./components/VideoBlock":"1PIQ"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("preact"),r=t(require("./App"));function t(e){return e&&e.__esModule?e:{default:e}}var u=document.getElementById("app");(0,e.render)((0,e.h)(r.default,null),u,u.lastChild);
},{"preact":"OmAK","./App":"0+DP"}]},{},["Focm"], null)
//# sourceMappingURL=/src.004c7f1a.js.map