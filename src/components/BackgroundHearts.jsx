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

function generateRandomNumbers(count, width, height, maxDelay) {
  let x = haltonSequence(count, 2)
  let y = haltonSequence(count, 3)
  let z = haltonSequence(count, 5)

  let result = [];
  for (let i=0; i<count; i++) {
    result.push({left: x[i] * width, top: y[i]*height, animationDelay: `${maxDelay*z[i]}s`});
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

  const locations = useMemo(() => generateRandomNumbers(count, width, height, -20), [count, width, height]);

  return (
    <>
      <div class="fixed w-screen h-screen -z-10">
        { locations.map((pos) => (
          <div class="fixed animate-fadeinout" style={pos}>
            <HeartIcon class="absolute top-[-2px] left-[-2px] -z-20 w-10 h-10 text-[#ff0088] animate-heartbeat blur-[8px]" style={{animationDelay: pos.animationDelay}}/>
            <HeartIcon class="absolute top-[0] left-[0] -z-10 w-9 h-9 text-[#ff92db] animate-heartbeat blur-[1px]" style={{animationDelay: pos.animationDelay}}/>
          </div>
        )) }
      </div>
    </>
  )
}
