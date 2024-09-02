import Header from './components/header'
import MenuMain from './components/menu-main'
import ObservationMenuMain from './components/observation-menu-main'
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation'
import Wrapper from './components/Wrapper'

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-full overflow-hidden">
        {/* Create command in sidebar */}
        <BackgroundGradientAnimation className="absolute top-0 left-0 h-full w-screen">
          <main className="flex flex-col w-[100%] h-screen pointer-events-auto bg-zinc-100 z-10 pt-16">
            <Wrapper>
              {/* Insert content */}
              <div>
                <MenuMain />
                <ObservationMenuMain />
              </div>
            </Wrapper>
          </main>
        </BackgroundGradientAnimation>
      </div>
    </div>
  )
}
