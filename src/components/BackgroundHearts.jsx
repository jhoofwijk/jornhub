import { HeartIcon } from "@heroicons/react/20/solid";
import { useMemo } from "react"

function haltonSequence(count, base) {
  let result = [];

  let n = 0;
  let d = 1;

  for (let i=0; i<count; i++) {
    let x = d - n;
    if (x == 1) {
      n = 1;
      d *= base;
    } else {
      let y = Math.floor(d / base);
      while (x <= y) {
        y = Math.floor(y / base);
      }
      n = (base + 1) * y - x;
    }
    result.push(n / d)
  }
  return result;
}

function generateRandomNumbers(count, width, height) {
  let x = haltonSequence(count, 2)
  let y = haltonSequence(count, 3)

  let result = [];
  for (let i=0; i<count; i++) {
    result.push({left: x[i] * width, top: y[i]*height});
  }
  return result;
}

// function generateRandomNumbers(count, width, height) {
//   return Array.from({length: count}, (v, k) => ({ top: Math.random() * height, left: Math.random() * width }))
// }

export function BgHearts() {
  const density = 70e-6; // hearts/pixel^2     (70 on large screen, 150 on mobile)
  const height = window.innerHeight;
  const width = window.innerWidth;
  const count = Math.floor(density * width * height);

  const locations = useMemo(() => generateRandomNumbers(count, width, height), [count, width, height]);

  return (
    <>
      <div class="fixed w-screen h-screen -z-20 blur-[8px]">
        { locations.map((pos) => <HeartIcon class="fixed w-10 h-10 text-[#ff0088] animate-heartbeat" style={{top: pos.top - 2, left: pos.left - 2}}/>) }
      </div>

      <div class="fixed w-screen h-screen -z-10 blur-[1px]">
        { locations.map((pos) => <HeartIcon class="fixed w-9 h-9 text-[#ff92db] animate-heartbeat" style={pos}/>) }
      </div>
    </>
  )
}
  
  