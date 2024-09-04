import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Wrapper from "@/components/Wrapper";

export default function Login () {
  return (
    <>
       <div className="flex h-full overflow-hidden">
        <BackgroundGradientAnimation className="absolute top-0 left-0 h-full w-screen">
          <div className="flex flex-col w-[100%] h-screen pointer-events-auto z-10">
            <Wrapper>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl font-bold text-white">Login</h1>
                  <div className="flex flex-col items-center justify-center">
                    <input type="text" placeholder="Usuário" className="p-2 m-2 bg-gray-100 rounded-md" />
                    <input type="password" placeholder="Senha" className="p-2 m-2 bg-gray-100 rounded-md" />
                    <button className="p-2 m-2 bg-gray-100 rounded-md">Entrar</button>
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </>
  )
}