import { HeartIcon } from "@heroicons/react/20/solid";
import { useMemo } from "@preact/compat"

export function BgHearts() {
  const count = 100;
  const height = window.innerHeight;
  const width = window.innerWidth;

  const locations = useMemo(
    () => {
      return Array.from({length: count}, (v, k) => ({ top: Math.random() * height, left: Math.random() * width }))
    },
    [count]
  );
    

  return (
    <>
      <div class="fixed w-screen h-screen -z-20 blur-[6px]">
        { locations.map((pos) => <HeartIcon class="fixed w-10 h-10 text-[#ff0088] animate-heartbeat" style={{top: pos.top - 2, left: pos.left - 2}}/>) }
      </div>

      <div class="fixed w-screen h-screen -z-10">
        { locations.map((pos) => <HeartIcon class="fixed w-9 h-9 text-[#ff92db] animate-heartbeat" style={pos}/>) }
      </div>
    </>
  )
}
  
  