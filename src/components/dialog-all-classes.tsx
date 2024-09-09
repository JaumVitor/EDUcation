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

export function DialogAllClasses() {
  const [classData, setClassData] = useState([
    { id: 0, name: '', teacher: '', newStudents: 0 }
  ])

  useEffect(() => {
    // Simulando uma requisição de API
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Turma A', teacher: 'Prof. João', newStudents: 5 },
        { id: 2, name: 'Turma B', teacher: 'Prof. Maria', newStudents: 3 },
        { id: 3, name: 'Turma C', teacher: 'Prof. Carlos', newStudents: 4 },
        { id: 4, name: 'Turma D', teacher: 'Prof. Ana', newStudents: 2 },
        { id: 5, name: 'Turma E', teacher: 'Prof. Pedro', newStudents: 3 }
      ]
      setClassData(data)
    }

    fetchData()
  }, [])

  return (
    <div className='cursor-pointer'>
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
            <DialogTitle>Visualizando todas as turmas</DialogTitle>
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
                  className="flex flex-row items-center justify-between p-2 bg-gray-100 rounded-md"
                >
                  <div>
                    <div className="text-sm font-semibold">{classItem.name}</div>
                    <div className="text-xs text-muted-foreground">
                      Professor: {classItem.teacher}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      {classItem.newStudents}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Novos alunos
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
