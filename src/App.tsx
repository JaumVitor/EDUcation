import Header from './components/header'
import MenuMain from './components/menu-main'
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation'
import Wrapper from './components/Wrapper'

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-full overflow-hidden">
        {/* Create command in sidebar */}
        <BackgroundGradientAnimation className="absolute top-0 left-0 h-full w-screen">
          <main className="flex flex-col justify-center w-[100%] h-screen pointer-events-auto bg-zinc-100 z-10">
            <Wrapper>
              {/* Insert content */}
              <MenuMain />
            </Wrapper>
          </main>
        </BackgroundGradientAnimation>
      </div>
    </div>
  )
}
