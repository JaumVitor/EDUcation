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
    'Aluno 1',
    'Aluno 2',
    'Aluno 3',
    'Aluno 4',
    'Aluno 3',
    'Aluno 4',
    'Aluno 3',
    'Aluno 4',
    'Aluno 3',
    'Aluno 4',
    'Aluno 3',
    'Aluno 4',
    'Aluno 3',
    'Aluno 4',
    'Aluno 5'
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
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Lotações na turma</DialogTitle>
            <DialogDescription>
              Faça a lotação na turma, pode escolher fazer a lotação dos
              professores ou dos alunos.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Alunos</TabsTrigger>
                <TabsTrigger value="password">Professores</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Matricular alunos</CardTitle>
                    <CardDescription>
                      Selecione os alunos que deseja matricular na turma
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {/* Lista de alunos para selecionar */}
                    <ScrollArea className="h-36 w-full rounded-md border">
                      <div className="p-4">
                        <h4 className="mb-4 text-sm font-medium leading-none">
                          Lista de alunos sem matricula
                        </h4>
                        {/* Lista de alunos para selecionar */}
                        <div className="flex flex-col justify-start gap-1">
                          {students.map((student, index) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Checkbox id="terms" name="terms" />
                                <Label htmlFor="terms">{student}</Label>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="password">
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
            <Button type="submit">Salvar lotação</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
