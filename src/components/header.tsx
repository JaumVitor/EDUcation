import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IoMenuSharp } from 'react-icons/io5'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from '@/components/ui/menubar'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { CalendarIcon, FaceIcon, RocketIcon } from '@radix-ui/react-icons'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'

import { Separator } from '@/components/ui/separator'

import { LiaUserEditSolid } from 'react-icons/lia'
import { ImExit } from 'react-icons/im'
import { GrConfigure } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { SheetContext } from '@/contexts/open-sidebar-context'


export default function Header() {
  const sheet = useContext(SheetContext)
  return (
    <div className="flex justify-between items-center gradient-bg px-4 py-2 border-b-2 border-green-400">
      <div className="flex gap-2 justify-center items-center">
        <Sheet open={sheet?.isOpen}>
          <SheetTrigger>
            <IoMenuSharp onClick={sheet?.handleTogleSheet} className="w-5 h-7 text-contrast" />
          </SheetTrigger>

          <Separator className="h-3 mx-1 bg-green-400" orientation="vertical" />

          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle className="text-contrast font-[Honk] text-4xl">
                EDUcation
              </SheetTitle>
              <SheetDescription>
                <Command className="rounded-lg border bg-transparent text-zinc-50 border-none shadow-none">
                  <CommandInput placeholder="Digite o que procura..." />
                  <CommandList>
                    <CommandEmpty className="text-contrast text-bold py-2">
                      Nenhum resultado encontrado
                    </CommandEmpty>
                    <CommandGroup heading="Opções principais">
                      <Link onClick={sheet?.handleTogleSheet} to={'/director'}>
                        <CommandItem className="cursor-pointer" >
                          <CalendarIcon className="mr-2 h-4 w-4 text-green-400" />
                          <span className="text-zinc-50">Direção</span>
                        </CommandItem>
                      </Link>
                      <Link onClick={sheet?.handleTogleSheet}to={'/teacher'}>
                        <CommandItem className="cursor-pointer">
                          <FaceIcon className="mr-2 h-4 w-4 text-green-400" />
                          <span className="text-zinc-50">Docente</span>
                        </CommandItem>
                      </Link>
                      <CommandItem>
                        <RocketIcon className="mr-2 h-4 w-4 text-green-400" />
                        <span className="text-zinc-50">Disciplina</span>
                      </CommandItem>
                      <CommandItem>
                        <RocketIcon className="mr-2 h-4 w-4 text-green-400" />
                        <span className="text-zinc-50">Turma</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <h1 className="text-zinc-50 font-bold text-xl text-center font-[Honk]">
          EDUcation
        </h1>
      </div>
      <div className="flex justify-center items-center gap-1 text-zinc-300 font-bold text-sm">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="relative group flex items-center">
                <div className="px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-sm">Olá, Jaum_https!</p>
                </div>
                <Avatar className="h-7 w-7">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </MenubarTrigger>

            <MenubarContent className="m-3">
              <div className={`px-2 transition-all duration-1000 opacity-100`}>
                <span className="text-xl pb-2 flex items-center justify-items-start gap-2">
                  <GrConfigure className="w-4" />
                  <span className="text-base">Configurações</span>
                </span>
              </div>
              <MenubarItem className="py-1 flex gap-2 cursor-pointer hover:bg-violet-200">
                <LiaUserEditSolid />
                Alterar dados
              </MenubarItem>
              <Link
                className="flex items-center gap-2 w-full hover:bg-violet-200"
                to="/login"
              >
                <MenubarItem className="py-1 flex gap-2 cursor-pointer w-full">
                  <ImExit />
                  Sair
                </MenubarItem>
              </Link>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  )
}
