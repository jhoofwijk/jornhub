import { BgHearts } from './BackgroundHearts';
import { Header } from './Header';

export function Page({children}) {
  return (
    <div>
      { process.env.BACKGROUND_HEARTS == 'true' ? <BgHearts/> : null }
      <Header/>
      {children}
    </div>
  )
}
