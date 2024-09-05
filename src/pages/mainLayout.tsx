import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Wrapper from '../components/Wrapper';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export default function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-full overflow-hidden">
        <BackgroundGradientAnimation className="absolute top-0 left-0 h-screen w-screen">
          <main className="flex flex-col w-[100%] h-screen pointer-events-auto bg-zinc-100 z-10">
            <Wrapper>
              <Outlet /> {/* Renderiza as rotas internas, como Home */}
            </Wrapper>
          </main>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
}