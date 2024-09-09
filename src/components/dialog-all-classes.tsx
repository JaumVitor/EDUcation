import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

export function DialogAllClasses() {
  const [classData, setClassData] = useState([
    { id: 0, name: '', teacher: '', amount: 0 }
  ])

  useEffect(() => {
    // Simulando uma requisição de API
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Turma A', teacher: 'Prof. João', amount: 20 },
        { id: 2, name: 'Turma B', teacher: 'Prof. Maria', amount: 22 },
        { id: 3, name: 'Turma C', teacher: 'Prof. Carlos', amount: 18 },
        { id: 4, name: 'Turma D', teacher: 'Prof. Ana', amount: 10 },
        { id: 5, name: 'Turma E', teacher: 'Prof. Pedro', amount: 7 }
      ]
      setClassData(data)
    }

    fetchData()
  }, [])

  return (
    <div className="cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <Button asChild size="sm" className="ml-auto gap-1">
            <div>
              Ver Todas
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="font-bold text-xl text-contrast">
              Visualizando todas as turmas
            </DialogTitle>
            <DialogDescription>
              Aqui você pode visualizar todas as turmas cadastradas.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Listando todas as turmas cadastradas */}
            {classData.map((classItem, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center justify-between p-2 bg-gray-100 rounded-md border"
                >
                  <div>
                    <div className="text-sm font-semibold">
                      {classItem.name} - {classItem.id}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <div className="flex flex-row items-center justify-center w-full">
                        <div className='flex items-center gap-2'>
                          <span className='text-sm font-semibold text-zinc-800'>Professores:</span>
                          <AnimatedTooltip items={people} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-semibold">
                      {classItem.amount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                    <span>Alunos</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
]
