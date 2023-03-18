
export function Block({title, children}) {
  return (
    <div class="max-w-7xl m-auto">
      <div class="text-xl font-semibold">
        {title}
      </div>
      {children}
    </div>
  )
}

