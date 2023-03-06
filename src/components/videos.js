
const videos = [
  { title: "Young black chick",                      time: "3:01", url: "dnIIA-6Kts0", img: "alfred.png" }, 
  { title: "Youngest interracial on the internet",   time: "1:04", url: "uZpmokW7ZY4", img: "calimero.png" }, 
  // { title: "Uncle Fucker",                           time: "1:02", url: "VsMcdEswK8k", img: "uncle.png" }, 
  { title: "Big cock with 5 young chicks",           time: "0:37", url: "WzTVkcHZkNE", img: "cock.png" }, 
  { title: "Hot chicks make your mouth water",       time: "2:28", url: "rI8vc-f8LCU", img: "bbq.png" }, 
  { title: "Dildo rammed into ass hard",             time: "0:55", url: "g3eCHzFGXLg", img: "dildo.png" }, 
  // { title: "Redhead poledancing",                    time: "9:27", url: "lZAWFajua7g", img: "pole.png" }, 
  // { title: "Brunette striptease",                    time: "6:26", url: "A0yOGaTcPUw", img: "strip.png" }, 
  // { title: "Californian Red Hot Topless Quaddruple", time: "5:21", url: "YlUKcNNmywk", img: "chili.png" }, 
  // { title: "Sexy Green String",                      time: "3:12", url: "iYlwzmj0dkw", img: "mankini.png" }, 
  { title: "Hot MILF dresses down",                  time: "4:00", url: "iwLaxZj8THw", img: "milf.png" }, 
  { title: "Spanish girl mounts huge cock",          time: "2:38", url: "jk7CbRJfKSY", img: "dora.png" }, 
  { title: "Hot girl-girl massage",                  time: "5:05", url: "LEMxAy8qkaA", img: "massage.png" }, 
  // { title: "Blonde Hairy Jorn",                      time: "8:41", url: "dEtyaC6ltQg", img: "star.png" }, 
  // { title: "Sexy teen with one ball",                time: "3:47", url: "qPd1YWTSwE0", img: "kud.png" }

  // Ideas: Woman eating juicy peach. - Plumber takes care of wet basement - ... getting wet on the beach - ... is grabbing some pussy - ... in the shower - ... getting whipped - dungeon - eploring her cave - 
];

videos.forEach((el,i) => {
  el.id = i;
  el.score = Math.round(Math.random() * 30 + 70)
  el.views = Math.round(Math.random() * 2000000 + 100000)
  el.webp = el.img.replace('png', 'webp');
  el.urlsrc = "https://www.youtube.com/embed/" + el.url;
});

export { videos };

