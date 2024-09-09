import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import {
  Activity,
  CircleUser,
  Users
} from 'lucide-react'

import { useState } from 'react'

export function InfoClassDashboard() {
  const [classData] = useState([
    { id: 0, name: '', teacher: '', newStudents: 0 }
  ])

  return (
    <>
      <Card x-chunk="school-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de Turmas</CardTitle>
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
          <CardTitle className="text-sm font-medium">Presentes Hoje</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">280</div>
          <p className="text-xs text-muted-foreground">20 ausentes</p>
        </CardContent>
      </Card>
    </>
  )
}
