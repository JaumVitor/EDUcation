import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { Checkbox } from '@/components/ui/checkbox'

export default function Login() {
  return (
    <>
      <div className="flex h-full overflow-hidden">
        <BackgroundGradientAnimation className="absolute top-0 left-0 h-full w-screen z-10">
          <div className="flex flex-col items-center justify-center w-[100%] h-screen pointer-events-auto z-50">
            <Card className="w-[400px] bg-transparent backdrop-blur-[250px] shadow-xl pt-6 pb-10 border-violet-500">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-4xl text-green-400 font-bold">
                  Login
                </CardTitle>
                <CardDescription className="text-violet-100 underline ">
                  Faça login para acessar EDUcation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4 text-contrast">
                    <div className="flex flex-col space-y-1.5">
                      <Label className="font-bold" htmlFor="name">
                        User
                      </Label>
                      <Input
                        className="border-violet-300 text-violet-200 placeholder:text-zinc-100/80"
                        id="user"
                        placeholder="Email ou Usuário"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label className="font-bold" htmlFor="framework">
                        Senha
                      </Label>
                      <Input
                        className="border-violet-300 text-violet-200 placeholder:text-zinc-100/80"
                        id="password"
                        type="password"
                        placeholder="Senha"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col ">
                <div className="flex justify-between w-full pb-6">
                  <div className="flex items-center justify-center gap-2 text-violet-400">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm text-zinc-100 underline font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Relembrar acesso
                    </label>
                  </div>
                  <Link className="underline text-zinc-100 text-sm" to="#">
                    Esqueceu sua senha?
                  </Link>
                </div>
                <Link className="w-full" to={'/'}>
                  <Button
                    className="w-full p-5 bg-contrast hover:bg-green-400 transition-all duration-300"
                    variant="outline"
                  >Entrar</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </>
  )
}
