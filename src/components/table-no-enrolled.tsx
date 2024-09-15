import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import PaginationSection from '@/components/paginationSection'
import { useEffect, useState } from 'react'

export default function TableNoEnrolled() {
  const [students, setStudents] = useState([
    {
      name: '',
      email: '',
      cpf: '',
      matricula: '',
      dataNascimento: '',
      telefone: ''
    }
  ])

  const [studentsNoEnrolled, setStudentsNoEnrolled] = useState([
    {
      name: '',
      email: '',
      cpf: '',
      matricula: '',
      dataNascimento: '',
      telefone: ''
    }
  ])

  useEffect(() => {
    // Simulando uma requisição de API
    const fetchData = async () => {
      const data = [
        {
          name: 'Liam Johnson',
          email: 'liam@email.com',
          cpf: '333.333.333-33',
          matricula: 'Matriculado',
          dataNascimento: '01/01/2000',
          telefone: '(86) 99422-4322'
        },
        {
          name: 'Oliver Brown',
          email: 'liam@email.com',
          cpf: '444.444.444-44',
          matricula: 'Matriculado',
          dataNascimento: '02/02/2001',
          telefone: '(86) 99422-4322'
        },
        {
          name: 'Ethan Williams',
          email: 'liam@email.com',
          cpf: '555.555.555-55',
          matricula: 'Sem matricula',
          dataNascimento: '03/03/2002',
          telefone: '(86) 99422-4322'
        },
        {
          name: 'Aiden Jones',
          email: 'liam@email.com',
          cpf: '666.666.666-66',
          matricula: 'Sem matricula',
          dataNascimento: '04/04/2003',
          telefone: '(86) 99422-4322'
        },
        {
          name: 'Lucas Garcia',
          email: 'liam@email.com',
          cpf: '777.777.777-77',
          matricula: 'Matriculado',
          dataNascimento: '05/05/2004',
          telefone: '(86) 99422-4322'
        },
        {
          name: 'Mia Rodriguez',
          email: 'liam@email.com',
          cpf: '888.888.888-88',
          matricula: 'Sem matricula',
          dataNascimento: '06/06/2005',
          telefone: '(86) 99422-4322'
        },
        {
          name: 'Mia Rodriguez',
          email: 'liam@email.com',
          cpf: '888.888.888-88',
          matricula: 'Sem matricula',
          dataNascimento: '06/06/2005',
          telefone: '(86) 99422-4322'
        },
        {
          name: 'Mia Rodriguez',
          email: 'liam@email.com',
          cpf: '888.888.888-88',
          matricula: 'Sem matricula',
          dataNascimento: '06/06/2005',
          telefone: '(86) 99422-4322'
        },
        {
          name: 'Mia Rodriguez',
          email: 'liam@email.com',
          cpf: '888.888.888-88',
          matricula: 'Sem matricula',
          dataNascimento: '06/06/2005',
          telefone: '(86) 99422-4322'
        },
        {
          name: 'Mia Rodriguez',
          email: 'liam@email.com',
          cpf: '888.888.888-88',
          matricula: 'Sem matricula',
          dataNascimento: '06/06/2005',
          telefone: '(86) 99422-4322'
        }
      ]
      setStudents(data)
      setStudentsNoEnrolled(data.filter((student) => student.matricula === 'Sem matricula'))
    }
    fetchData()
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = studentsNoEnrolled.slice(firstPostIndex, lastPostIndex)

  return (
    <div>
      <TabsContent className="mt-0" value="no-enrolled">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Alunos matriculados na escola</CardTitle>
            <CardDescription>
              Lista de todos os alunos matriculados na escola
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead className="hidden sm:table-cell">CPF</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Matricula
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Data de nascimento
                  </TableHead>
                  <TableHead className="text-right">Telefone</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentPosts.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium">{student.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {student.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {student.cpf}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {student.matricula === 'Matriculado' ? (
                        <Badge
                          className="text-xs font-normal"
                          variant="default"
                        >
                          {student.matricula}
                        </Badge>
                      ) : (
                        <Badge
                          className="text-xs font-normal"
                          variant="destructive"
                        >
                          {student.matricula}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {student.dataNascimento}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {student.telefone}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <PaginationSection
            totalPosts={students.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            page="class"
          />
        </Card>
      </TabsContent>
    </div>
  )
}
