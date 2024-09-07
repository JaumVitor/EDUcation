import { useState, useEffect } from 'react';
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  Menu,
  Package2,
  Users
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
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

export const description =
  'Um painel de controle para a escola, com informações sobre várias turmas, número de alunos, atividades recentes e desempenho geral. O cabeçalho contém uma barra de navegação, um campo de busca e um menu de usuário. A área principal é dividida em duas seções: uma com estatísticas gerais e outra com detalhes das atividades recentes das turmas.'

export default function School() {
  const [classData, setClassData] = useState([{ id: 0, name: '', teacher: '', newStudents: 0 }]);

  useEffect(() => {
    // Simulando uma requisição de API
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Turma A', teacher: 'Prof. João', newStudents: 5 },
        { id: 2, name: 'Turma B', teacher: 'Prof. Maria', newStudents: 3 },
        { id: 3, name: 'Turma C', teacher: 'Prof. Carlos', newStudents: 4 },
        { id: 4, name: 'Turma D', teacher: 'Prof. Ana', newStudents: 2 },
        { id: 5, name: 'Turma E', teacher: 'Prof. Pedro', newStudents: 3 }
      ];
      setClassData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-full overflow-hidden">
        <BackgroundGradientAnimation className="absolute top-0 left-0 h-screen w-screen">
          <main className="flex flex-col w-full h-screen pointer-events-auto bg-zinc-100 z-50">
            <Wrapper>
              <div className="flex min-h-screen w-full flex-col">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="shrink-0 md:hidden"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                      <Link
                        to="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                      >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Escola XYZ</span>
                      </Link>
                      <Link to="#" className="hover:text-foreground">
                        Painel
                      </Link>
                      <Link
                        to="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Turmas
                      </Link>
                      <Link
                        to="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Atividades
                      </Link>
                      <Link
                        to="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Desempenho
                      </Link>
                      <Link
                        to="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Configurações
                      </Link>
                    </nav>
                  </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                </div>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                  <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <Card x-chunk="school-01-chunk-0">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total de Turmas
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{classData.length}</div>
                        <p className="text-xs text-muted-foreground">
                          +1 nova turma este mês
                        </p>
                      </CardContent>
                    </Card>
                    <Card x-chunk="school-01-chunk-1">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Atividades Recentes
                        </CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">50</div>
                        <p className="text-xs text-muted-foreground">
                          +10 atividades esta semana
                        </p>
                      </CardContent>
                    </Card>
                    <Card x-chunk="school-01-chunk-2">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Desempenho Médio
                        </CardTitle>
                        <CircleUser className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">80%</div>
                        <p className="text-xs text-muted-foreground">
                          +3% desde o último mês
                        </p>
                      </CardContent>
                    </Card>
                    <Card x-chunk="school-01-chunk-3">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Presentes Hoje
                        </CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">280</div>
                        <p className="text-xs text-muted-foreground">
                          20 ausentes
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <Card
                      className="xl:col-span-2"
                      x-chunk="school-01-chunk-4"
                    >
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div className="grid gap-2">
                          <CardTitle>Turmas cadastradas</CardTitle>
                          <CardDescription>
                            Informações sobre as turmas cadastradas
                          </CardDescription>
                        </div>
                        <div className='flex gap-2'>
                          <Button asChild size="sm" className="ml-auto gap-1">
                            <Link to="#">
                              Criar Turma
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild size="sm" className="ml-auto gap-1">
                            <Link to="#">
                              Ver Todas
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </Button>
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
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {classData.map((classItem) => (
                              <TableRow key={classItem.id}>
                                <TableCell>
                                  <div className="font-medium">{classItem.name}</div>
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
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                    <Card x-chunk="school-01-chunk-5">
                      <CardHeader>
                        <CardTitle>Turmas Recentes</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-8">
                        {classData.map((classItem) => (
                          <div key={classItem.id} className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                              <AvatarImage src={`/avatars/${classItem.id}.png`} alt="Avatar" />
                              <AvatarFallback>{classItem.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                              <p className="text-sm font-medium leading-none">
                                {classItem.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {classItem.teacher}
                              </p>
                            </div>
                            <div className="ml-auto font-medium">+{classItem.newStudents} alunos</div>
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