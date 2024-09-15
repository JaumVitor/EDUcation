import { TrendingUp } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { ChartConfig } from '@/components/ui/chart'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { LabelList, RadialBar, RadialBarChart } from 'recharts'
import { PiStudentBold } from 'react-icons/pi'

import TableTotalStudents from '@/components/table-total-students'
// import TableNoEnrolled from '@/components/table-no-enrolled'
import TableEnrolled from '@/components/table-enrolled'
import TableNoEnrolled from '@/components/table-no-enrolled'

export default function Student() {
  // Dados dos alunos
  return (
    <main className="grid grid-cols-4 flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 mt-5">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 col-span-3">
        <Tabs defaultValue="total">
          <TabsList className="mb-3">
            <TabsTrigger value="total">Todos alunos</TabsTrigger>
            <TabsTrigger value="enrolled">Matriculados</TabsTrigger>
            <TabsTrigger value="no-enrolled">Sem matricula</TabsTrigger>
          </TabsList>
          <TableTotalStudents />
          <TableEnrolled />        
          <TableNoEnrolled />
        </Tabs>
      </div>
      <div className="mt-12 flex flex-col gap-5 col-span-1">
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Radial Chart - Label</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <RadialBarChart
                data={chartData}
                startAngle={-90}
                endAngle={380}
                innerRadius={30}
                outerRadius={110}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel nameKey="browser" />}
                />
                <RadialBar dataKey="quant" background>
                  <LabelList
                    position="insideStart"
                    dataKey="browser"
                    className="fill-white capitalize mix-blend-luminosity"
                    fontSize={11}
                  />
                </RadialBar>
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>

        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de alunos Matriculados
            </CardTitle>
            <PiStudentBold className="h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">10 Alunos</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

const chartData = [
  { browser: 'Todos', quant: 10, fill: 'var(--color-chrome)' },
  { browser: 'Matriculados', quant: 3, fill: 'var(--color-safari)' },
  { browser: 'Sem Matricula', quant: 7, fill: 'var(--color-firefox)' }
]
const chartConfig = {
  amount: {
    label: 'Visitors'
  },
  chrome: {
    label: 'Todos Alunos',
    color: 'hsl(var(--chart-2))'
  },
  safari: {
    label: 'Matriculados',
    color: 'hsl(var(--chart-3))'
  },
  firefox: {
    label: 'Sem Matricula',
    color: 'hsl(var(--chart-4))'
  }
} satisfies ChartConfig
