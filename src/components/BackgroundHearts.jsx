import { HeartIcon } from "@heroicons/react/20/solid";
import { useMemo } from "@preact/compat"

function generateRandomNumbers(count, width, height) {
  return Array.from({length: count}, (v, k) => ({ top: Math.random() * height, left: Math.random() * width }))
}

export function BgHearts() {
  const density = 70e-6; // hearts/pixel^2
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
  
  