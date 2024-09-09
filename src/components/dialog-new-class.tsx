import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import { Link } from 'react-router-dom'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { useState } from 'react'

export default function DialogNewClass() {
  const [amount_students, setAmountStudents] = useState('')
  const [numberClass, setNumberClass] = useState('')
  const [className, setClassName] = useState('')

  const handleAmountStudentsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAmountStudents(event.target.value)
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            asChild
            size="sm"
            className="ml-auto gap-1 shadow-lg bg-green-500 border border-green-600 hover:bg-[#41CA73] text-zinc-50"
          >
            <Link to="#">
              Criar Turma
              <IoMdAddCircleOutline className="h-4 w-4" />
            </Link>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-contrast text-xl font-bold">
              Cadastramento de Turma
            </DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para criar uma nova turma.
            </DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                {/* Informações sobre o nome da turma */}
                <Label htmlFor="class_name">Nome da turma</Label>
                <Input
                  id="class_name"
                  value={className}
                  onChange={e => setClassName(e.target.value)}
                  className="col-span-3"
                  placeholder="Nome do diretor"
                  required={true}
                />
                {/* Informações sobre o numero da sala de aula */}
                <Label htmlFor="class_number">Nº da sala</Label>
                <Input
                  onChange={e => setNumberClass(e.target.value)}
                  id="class_number"
                  value={numberClass}
                  className="col-span-3"
                  placeholder="Digite o numero da sala"
                  required={true}
                />

                {/* Informações sobre quem serão os professores da turma do professor */}
                <Label htmlFor="amount_students">Capacidade na turma</Label>
                <Input
                  type="number"
                  id="amount_students"
                  value={amount_students}
                  onChange={handleAmountStudentsChange}
                  className="col-span-3"
                  placeholder="Ex: 20 alunos"
                  required={true}
                ></Input>
              </div>
            </div>
            <DialogFooter>
              <Button className="w-full mt-5" type="submit">
                Salvar cadastro
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
