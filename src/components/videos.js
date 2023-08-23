import alfred from "../img/thumb/alfred.webp";
import calimero from "../img/thumb/calimero.webp";
import cock from "../img/thumb/cock.webp";
import bbq from "../img/thumb/bbq.webp";
import dora from "../img/thumb/dora.webp";
import cat from "../img/thumb/cat.webp";
import tit from "../img/thumb/tit.webp";
import bound from "../img/thumb/bound.webp";

const videos = [
  { title: "Young black chick",                      time: "3:01", url: "dnIIA-6Kts0", img: alfred }, 
  { title: "Youngest interracial on the internet",   time: "1:04", url: "uZpmokW7ZY4", img: calimero }, 
  { title: "Big cock with 5 young chicks",           time: "0:37", url: "WzTVkcHZkNE", img: cock }, 
  { title: "Super hot chicks make your mouth water",       time: "2:28", url: "rI8vc-f8LCU", img: bbq }, 
  // { title: "Dildo rammed into ass hard",             time: "0:55", url: "g3eCHzFGXLg", img: dildo }, 
  // { title: "Hot MILF dressing down",                  time: "4:00", url: "iwLaxZj8THw", img: milf }, 
  { title: "Spanish girl mounts huge cock",          time: "2:38", url: "jk7CbRJfKSY", img: dora }, 
  // { title: "Hot girl-girl massage",                  time: "5:05", url: "LEMxAy8qkaA", img: massage }, 
  // { title: "Uncle Fucker",                           time: "1:02", url: "VsMcdEswK8k", img: "uncle.png" }, 
  // { title: "Redhead poledancing",                    time: "9:27", url: "lZAWFajua7g", img: "pole.png" }, 
  // { title: "Brunette striptease",                    time: "6:26", url: "A0yOGaTcPUw", img: "strip.png" }, 
  // { title: "Californian Red Hot Topless Quaddruple", time: "5:21", url: "YlUKcNNmywk", img: "chili.png" }, 
  // { title: "Sexy Green String",                      time: "3:12", url: "iYlwzmj0dkw", img: "mankini.png" }, 
  // { title: "Blonde Hairy Jorn",                      time: "8:41", url: "dEtyaC6ltQg", img: "star.png" }, 
  // { title: "Sexy teen with one ball",                time: "3:47", url: "qPd1YWTSwE0", img: "kud.png" }
  { title: "Touching my pussy on the couch",            time: "1:36", url: "Sb0WAbADpJU", img: cat }, 
  { title: "Showing off my tits in the garden",         time: "1:10", url: "_EfCuf9YtW4", img: tit }, 
  { title: "Public bondage",                            time: "2:47", url: "LtIiSFmTuk0", img: bound }, 


  // Ideas: 
  // - ... eating juicy peach. 
  // - ... getting wet on the beach 
  // - ... is grabbing some pussy (hairy / bald / ...)
  // - ... in the shower 
  // - ... getting whipped 
  // - dungeon 
  // - eploring her cave 
  
  // - Touching my pussy on the couch                     1:36           Sb0WAbADpJU
  // - Showing off my tits in the garden                  1:10           _EfCuf9YtW4
  // - Public bondage                                     2:47           LtIiSFmTuk0
  // - shower                                             3:21           0WtDmbr9xyY   (meh, too literal)

  // - public bondage (houdini / (or) / escape artist)    2:47           LtIiSFmTuk0

  // - tits (bird)   (ideally: freeing tits in the park)
];

videos.forEach((el,i) => {
  el.id = i;
  el.score = Math.round(Math.random() * 30 + 70)
  el.views = Math.round(Math.random() * 2000000 + 100000)
  el.urlsrc = "https://www.youtube.com/embed/" + el.url;
});

export { videos };

