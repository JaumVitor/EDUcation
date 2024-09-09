import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Link } from 'react-router-dom'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import Header from '@/components/header'
import Wrapper from '@/components/Wrapper'

import PaginationSection from '@/components/paginationSection'
import { MdDelete } from 'react-icons/md'
import { MdModeEditOutline } from 'react-icons/md'

import { ImSearch } from 'react-icons/im'
import LotationClass from '@/components/lotation-class'
import { InfoClassDashboard } from '@/components/info-class-dashboard'
import DialogNewClass from '@/components/dialog-new-class'

export const description =
  'Um painel de controle para a escola, com informações sobre várias turmas, número de alunos, atividades recentes e desempenho geral. O cabeçalho contém uma barra de navegação, um campo de busca e um menu de usuário. A área principal é dividida em duas seções: uma com estatísticas gerais e outra com detalhes das atividades recentes das turmas.'

import { DialogAllClasses } from '@/components/dialog-all-classes'

export default function School() {
  const [classData, setClassData] = useState([
    { id: 0, name: '', teacher: '', newStudents: 0 }
  ])

  const [recentClasses, setRecentClasses] = useState([
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

      const recentData = [
        { id: 1, name: 'Turma A', teacher: 'Prof. João', newStudents: 5 },
        { id: 2, name: 'Turma B', teacher: 'Prof. Maria', newStudents: 3 },
        { id: 3, name: 'Turma C', teacher: 'Prof. Carlos', newStudents: 4 },
        { id: 4, name: 'Turma D', teacher: 'Prof. Ana', newStudents: 2 },
        { id: 5, name: 'Turma E', teacher: 'Prof. Pedro', newStudents: 3 }
      ]
      setRecentClasses(recentData)
      setClassData(data)
    }

    fetchData()
  }, [])

  // Informações sobre todos os professores cadastrados

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = classData.slice(firstPostIndex, lastPostIndex)

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-full overflow-hidden">
        <BackgroundGradientAnimation className="absolute top-0 left-0 h-screen w-screen">
          <main className="flex flex-col w-full h-screen pointer-events-auto bg-zinc-100 z-50">
            <Wrapper>
              <div className="flex min-h-screen w-full flex-col">
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"></div>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                  <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <InfoClassDashboard />
                  </div>
                  <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <Card
                      className="flex flex-col justify-between xl:col-span-2"
                      x-chunk="school-01-chunk-4"
                    >
                      <div>
                        {/* Tabela com as informações das turmas cadastradas */}
                        <CardHeader className="flex flex-row items-center justify-between">
                          <div className="grid gap-2">
                            <CardTitle>Turmas cadastradas</CardTitle>
                            <CardDescription>
                              Informações sobre as turmas cadastradas
                            </CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <DialogAllClasses /> {/* Dialog para visualizar todas as turmas */}
                            <DialogNewClass /> {/* Dialog para cadastrar uma nova turma CRIAR TURMA*/}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Turmas</TableHead>
                                <TableHead className="text-right">
                                  Nº de alunos
                                </TableHead>
                                <TableHead className="text-right">
                                  Nº da sala
                                </TableHead>
                                <TableHead className="text-right">
                                  Opções
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {currentPosts.map(classItem => (
                                <TableRow key={classItem.id}>
                                  <TableCell>
                                    <div className="font-medium">
                                      {classItem.name}
                                    </div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                      {classItem.teacher}
                                    </div>
                                  </TableCell>
                                  <TableCell className="text-right">
                                    20
                                  </TableCell>
                                  <TableCell className="text-right">
                                    002
                                  </TableCell>
                                  <TableCell className="text-right flex justify-end gap-1">
                                    {/* Opção para visualização da turma especifica */}
                                    <Button
                                      className="text-zinc-100 hover:text-green-500 bg-violet-600 border p-2"
                                      size={'sm'}
                                    >
                                      <ImSearch className="w-4 h-4" />
                                    </Button>
                                    {/* Opção para edição da turma especifica */}
                                    <Button
                                      className="text-zinc-100 hover:text-green-500 bg-violet-600 border p-2"
                                      size={'sm'}
                                    >
                                      <MdModeEditOutline className="w-4 h-4" />
                                    </Button>
                                    {/* Componente responsavel para lotação dos alunos ou professor */}
                                    <LotationClass />
                                    {/* Opção para exclusão da turma */}
                                    <Button
                                      className="text-zinc-100 hover:text-green-500 bg-destructive border hover:bg-red-600 p-2"
                                      size={'sm'}
                                    >
                                      <MdDelete className="w-4 h-4" />
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </CardContent>
                      </div>
                      <PaginationSection
                        totalPosts={classData.length}
                        postsPerPage={postsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        page="class"
                      />
                    </Card>
                    {/* Tabela informativa TURMAS RECENTES */}
                    <Card x-chunk="school-01-chunk-5">
                      <CardHeader>
                        <CardTitle>Turmas Recentes</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-8">
                        {recentClasses.map(classItem => (
                          <div
                            key={classItem.id}
                            className="flex items-center gap-4"
                          >
                            <Avatar className="hidden h-9 w-9 sm:flex">
                              <AvatarImage
                                src={`/avatars/${classItem.id}.png`}
                                alt="Avatar"
                              />
                              <AvatarFallback>
                                {classItem.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                              <p className="text-sm font-medium leading-none">
                                {classItem.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {classItem.teacher}
                              </p>
                            </div>
                            <div className="ml-auto font-medium">
                              +{classItem.newStudents} alunos
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </main>
              </div>
            </Wrapper>
          </main>
        </BackgroundGradientAnimation>
      </div>
    </div>
  )
}
