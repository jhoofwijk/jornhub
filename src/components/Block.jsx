
export function Block({title, children}) {
  return (
    <div class="max-w-7xl m-auto">
      <div class="text-2xl">
        {title}
      </div>
      {children}
    </div>
  )
}

