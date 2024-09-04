import { Alert, AlertDescription, AlertTitle } from './ui/alert'

import { PiWarningFill } from "react-icons/pi";
import { PiStudentBold } from 'react-icons/pi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdClass } from 'react-icons/md'
import { GiBookshelf, GiSpellBook } from 'react-icons/gi'
import { Separator } from './ui/separator'

export default function ObservatinoMenuMain() {
  const obs = [
    {
      title: 'Direção',
      icon: <GiSpellBook className="w-6 h-6" />,
      description: 'Opção para direção'
    },
    {
      title: 'Docente',
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      description: 'Opção para docente'
    },
    {
      title: 'Disciplina',
      icon: <GiBookshelf className="w-6 h-6" />,
      description: 'Opção para disciplina'
    },
    {
      title: 'Turma',
      icon: <MdClass className="w-6 h-6" />,
      description: 'Opção para turma'
    },
    {
      title: 'Aluno',
      icon: <PiStudentBold className="w-6 h-6" />,
      description: 'Opção para aluno'
    }
  ]

  return (
    <div>
      <Alert className='bg-violet-200/10'>
        <AlertTitle className="text-xl text-contrast font-bold pb-3">
          <div className='flex justify-between'>
            Auxilio das opções:
            <PiWarningFill />
          </div>
        </AlertTitle>
        <AlertDescription className="flex">
          {obs.map((item, index) => {
            return (
              <div
                className="flex justify-around flex-1 items-center gap-1"
                key={index}
              >
                <div className='flex items-center justify-center gap-3'>
                  {item.icon}
                  <p className="font-bold">{item.description}</p>
                </div>
                {!(obs.length - 1 == index) && (
                  <Separator className="mx-3" orientation="vertical" />
                )}
              </div>
            )
          })}
        </AlertDescription>
      </Alert>
    </div>
  )
}
