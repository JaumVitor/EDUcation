import Header from './components/header'
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation'
import Wrapper from './components/Wrapper'
import Director from './pages/director'
import Home from './pages/home'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/director',
    element: <Director />
  }
]);

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-full overflow-hidden">
        {/* Create command in sidebar */}
        <BackgroundGradientAnimation className="absolute top-0 left-0 h-full w-screen">
          <main className="flex flex-col w-[100%] h-screen pointer-events-auto bg-zinc-100 z-10">
            <Wrapper>
              {/* Insert content */}
              <RouterProvider router={router} />
            </Wrapper>
          </main>
        </BackgroundGradientAnimation>
      </div>
    </div>
  )
}
