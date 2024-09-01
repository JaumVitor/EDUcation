import Header from './components/header'
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation'

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-full overflow-hidden">
        {/* Create command in sidebar */}
        <BackgroundGradientAnimation className='absolute top-0 left-0 h-full w-screen'>
          <main className="flex flex-col items-center w-[100%] h-screen pointer-events-auto bg-white z-10">
            {/* Insert content */}
          </main>
        </BackgroundGradientAnimation>
      </div>
    </div>
  )
}
