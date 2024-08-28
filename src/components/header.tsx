import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useState } from 'react'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from '@/components/ui/menubar'

import { LiaUserEditSolid } from "react-icons/lia";
import { ImExit } from 'react-icons/im';

export default function Header() {
  const [isAvatar, setAvatar] = useState(false)

  const handleAvatar = () => {
    setAvatar(!isAvatar)
  }

  return (
    <div className="flex justify-between items-center gradient-bg px-4 py-2">
      <h1 className="text-zinc-50 font-bold text-xl text-center">EDUcation</h1>
      <div className="flex justify-center items-center gap-1 text-zinc-300 font-bold text-sm">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Avatar className="h-7 w-7" onClick={handleAvatar}>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MenubarTrigger>

            <MenubarContent className="m-3">
              <div className={`px-2 transition-all duration-1000 opacity-100`}>
                <p className='text-xl pb-2'>Olá, Jaum_https!</p>
              </div>
              <MenubarItem className='py-1 flex gap-2 cursor-pointer'>
                <LiaUserEditSolid />
                  Alterar dados
              </MenubarItem>
              <MenubarItem className='py-1 flex gap-2 cursor-pointer'>
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
