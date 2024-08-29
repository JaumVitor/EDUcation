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

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon
} from '@radix-ui/react-icons'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command'

import { Separator } from "@/components/ui/separator"

import { LiaUserEditSolid } from 'react-icons/lia'
import { ImExit } from 'react-icons/im'
import { GrConfigure } from 'react-icons/gr'

export default function Header() {
  return (
    <div className="flex justify-between items-center gradient-bg px-4 py-2 border-green-400 border-b-2">
      <div className="flex gap-2 justify-center items-center">
        <Sheet>
          <SheetTrigger>
            <IoMenuSharp className="w-5 h-7 text-contrast" />
          </SheetTrigger>

          <Separator className="h-3 mx-1 bg-green-400" orientation='vertical'/>

          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle className="text-contrast font-[Honk] text-4xl">
                EDUcation
              </SheetTitle>
              <SheetDescription>
                <Command className="rounded-lg border bg-transparent text-zinc-50 border-none shadow-none">
                  <CommandInput placeholder="Digite o que procura..." />
                  <CommandList>
                    <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <FaceIcon className="mr-2 h-4 w-4" />
                        <span>Search Emoji</span>
                      </CommandItem>
                      <CommandItem disabled>
                        <RocketIcon className="mr-2 h-4 w-4" />
                        <span>Launch</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem>
                        <PersonIcon className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                        <span>Mail</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <GearIcon className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
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
                <p className="text-xl pb-2 flex items-center justify-items-start gap-2">
                  <GrConfigure className="w-4" />
                  <p className='text-lg'>Configurações</p>
                </p>
              </div>
              <MenubarItem className="py-1 flex gap-2 cursor-pointer">
                <LiaUserEditSolid />
                Alterar dados
              </MenubarItem>
              <MenubarItem className="py-1 flex gap-2 cursor-pointer">
                <ImExit />
                Sair
              </MenubarItem>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  )
}
