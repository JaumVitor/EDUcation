import { Button } from '@/components/ui/button'
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
import { TbBooks } from 'react-icons/tb'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

import { Checkbox } from '@/components/ui/checkbox'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function LotationClass() {
  const teachers = [
    'Prof. João',
    'Prof. Maria',
    'Prof. Carlos',
    'Prof. Ana',
    'Prof. Pedro'
  ]
  const students = [
    {
      name: 'João Silva',
      age: 20,
      email: 'joao.silva@example.com',
      registrationNumber: '20230001'
    },
    {
      name: 'Maria Oliveira',
      age: 22,
      email: 'maria.oliveira@example.com',
      registrationNumber: '20230002'
    },
    {
      name: 'Pedro Santos',
      age: 19,
      email: 'pedro.santos@example.com',
      registrationNumber: '20230003'
    },
    {
      name: 'Ana Costa',
      age: 21,
      email: 'ana.costa@example.com',
      registrationNumber: '20230004'
    },
    {
      name: 'Lucas Pereira',
      age: 23,
      email: 'lucas.pereira@example.com',
      registrationNumber: '20230005'
    },
    {
      name: 'Beatriz Almeida',
      age: 20,
      email: 'beatriz.almeida@example.com',
      registrationNumber: '20230006'
    },
    {
      name: 'Juliana Souza',
      age: 23,
      email: 'juliana.souza@example.com',
      registrationNumber: '20230010'
    },
    {
      name: 'Felipe Barbosa',
      age: 20,
      email: 'felipe.barbosa@example.com',
      registrationNumber: '20230011'
    },
    {
      name: 'Carolina Gomes',
      age: 22,
      email: 'carolina.gomes@example.com',
      registrationNumber: '20230012'
    },
    {
      name: 'Bruno Martins',
      age: 19,
      email: 'bruno.martins@example.com',
      registrationNumber: '20230013'
    },
    {
      name: 'Fernanda Dias',
      age: 21,
      email: 'fernanda.dias@example.com',
      registrationNumber: '20230014'
    },
    {
      name: 'Thiago Araujo',
      age: 23,
      email: 'thiago.araujo@example.com',
      registrationNumber: '20230015'
    }
  ]

  // Informações sobre as disciplinas que serão vinculadas ao professor
  const subjects = [
    'Matemática',
    'Português',
    'História',
    'Geografia',
    'Ciências'
  ]

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="text-zinc-100 hover:text-green-500 bg-violet-600 border p-2"
            size={'sm'}
          >
            <TbBooks className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Lotações na turma</DialogTitle>
            <DialogDescription>
              Faça a lotação na turma, pode escolher fazer a lotação dos
              professores ou dos alunos.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student">Alunos</TabsTrigger>
                <TabsTrigger value="teacher">Professores</TabsTrigger>
              </TabsList>
              <TabsContent value="student">
                <Card>
                  <CardHeader>
                    <CardTitle>Matricular alunos</CardTitle>
                    <CardDescription>
                      Selecione os alunos que deseja matricular na turma
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {/* Lista de alunos para selecionar */}
                    <div className="p-4 pt-0 overflow-auto max-h-52">
                      <h4 className="mb-4 text-base font-bold leading-none">
                        Lista de alunos sem matricula
                      </h4>
                      {/* Lista de alunos para selecionar */}
                      <div className="flex flex-col justify-start">
                        {students.map((student, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <div className="flex items-center text-sm w-full gap-2">
                                <Checkbox id="student" name="student" />
                                <span>{student.name} - </span>
                                <span>Idade: {student.age}</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="teacher">
                <Card>
                  <CardHeader>
                    <CardTitle>Lotação de professor</CardTitle>
                    <CardDescription>
                      Selecione o professor que deseja lotar na turma e quais
                      são as disciplinas que ele irá lecionar
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <Select required={true}>
                        <SelectTrigger className="w-full col-span-2">
                          <SelectValue placeholder="Selecione o professor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Professores vinculados</SelectLabel>
                            {teachers.map((teacher, index) => {
                              return (
                                <SelectItem
                                  className="cursor-pointer"
                                  key={index}
                                  value={teacher}
                                >
                                  {teacher}
                                </SelectItem>
                              )
                            })}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {/* Informações sobre as disciplinas que serão vinculadas ao professor selecionado*/}
                      <div className="flex flex-col justify-start gap-1 pt-3">
                        {subjects.map((subject, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <Checkbox id="terms" name="terms" />
                              <Label htmlFor="terms">{subject}</Label>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <DialogFooter>
            <Button className="w-full" type="submit">Concluir lotação</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
