
var ads = "69.jpg  difference.jpg  DIY.jpg  nothing.jpg  priest.jpg  self.jpg  unemployed2.jpg  doneright.png".split("  ");
ads = ads.map(value => {
  return {
    img: value,
    webp: value.replace(/(jpg|png)/gi, 'webp')
  }
});

export {ads};