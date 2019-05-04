export function shuffle(arr) {
  let array = Array.from(arr);
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function sample(arr, count) {
  let shuffled = shuffle(arr)
  return shuffled.filter((_v, i) => i < count);
}
