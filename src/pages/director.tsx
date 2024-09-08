import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

import { useContext } from 'react'
import { SheetContext } from '@/contexts/open-sidebar-context'
import PaginationSection from '@/components/paginationSection'

import { Pie, PieChart } from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'

import { TrendingUp } from 'lucide-react'
import { IoAddCircle } from 'react-icons/io5'

export default function Director() {
  const [departaments] = useState<string[]>([
    'Administração',
    'Recursos Humanos',
    'Financeiro',
    'Marketing',
    'Vendas'
  ])

  const [date, setDate] = useState<Date>()
  const [name, setName] = useState<string>('')
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>('Nenhum selecionado')
  const [dataTable, setDataTable] = useState<
    {
      id: number
      name: string
      department: string
      hireDate: Date | null
    }[]
  >([])

  function handleNameChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  const handleSelectChange = (value: string) => {
    setSelectedDepartment(value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Aqui você pode enviar os dados do formulário para a API

    const newDataTable = {
      id: dataTable.length + 1,
      name: name,
      department: selectedDepartment,
      hireDate: date || null
    }

    setDataTable([...dataTable, newDataTable])
    setName('')
    setDate(undefined)
    modal?.handleTogleModal()
  }

  const modal = useContext(SheetContext)

  // Paginação da tabela
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = dataTable.slice(firstPostIndex, lastPostIndex)

  return (
    <div className="pt-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold underline">
          <TextGenerateEffect
            className=" font-bold pb-5 underline"
            words="Diretores cadastrados na plataforma"
          />
        </h2>

        {/* Button que vai disparar o modal dialog */}
        <Dialog open={modal?.isOpenModal}>
          <DialogTrigger asChild>
            <Button
              onClick={modal?.handleTogleModal}
              className="bg-green-500 hover:bg-green-600 text-zinc-100 font-bold hover:text-zinc-100 shadow-md border-green-600 flex gap-2"
              variant="outline"
            >
              <IoAddCircle className="w-5 h-5" />
              Cadastrar Novo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-contrast text-2xl font-bold">
                Cadastro de diretores
              </DialogTitle>
              <DialogDescription>
                Nesse formulário você pode cadastrar um novo diretor na
                plataforma.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={handleNameChangeName}
                    className="col-span-3"
                    placeholder="Nome do diretor"
                    required={true}
                  />
                  <Label htmlFor="department">Departamento</Label>
                  {/* Opções de cargos cadastradas para diretores */}
                  <Select required={true} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full col-span-2">
                      <SelectValue placeholder="Selecione o departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Departamentos cadastrados</SelectLabel>
                        {/* <SelectItem value="apple">Apple</SelectItem> */}
                        {departaments.map((departament, index) => {
                          return (
                            <SelectItem key={index} value={departament}>
                              {departament}
                            </SelectItem>
                          )
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <br />
                  <Label htmlFor="hireDate">Data de contratação</Label>
                  <div className="col-span-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[267px] justify-start text-left font-normal',
                            !date && 'bg-violet-10'
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, 'dd/MM/yyyy')
                          ) : (
                            <span>Escolha a data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
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
      </div>

      {/* Tabela de cadastro dos diretores */}
      <div className="grid grid-cols-4 gap-5 justify-between">
        <div className="col-span-3">
          <Table className="border-violet-500 border bg-violet-200/20 backdrop-blur-[200px] shadow-md">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] font-bold">ID</TableHead>
                <TableHead className="font-bold">Nome</TableHead>
                <TableHead className="font-bold">Departamento</TableHead>
                <TableHead className="font-bold text-right">
                  Data de Contratação
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPosts.map(data => (
                <TableRow key={data.id}>
                  <TableCell className="font-medium">{data.id}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell className="text-right">
                    {data.hireDate ? format(data.hireDate, 'dd/MM/yyyy') : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total de Diretores</TableCell>
                <TableCell className="text-right">{dataTable.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          {/* Paginação da tabela */}
          <PaginationSection
            totalPosts={dataTable.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        {/* Gráfico de pizza com a quantidade de diretores por departamento */}
        <Card className="flex flex-col rounded-md">
          <CardHeader className="items-center pb-0">
            <CardTitle className="text-sm">
              Quantitativo por departamento
            </CardTitle>
            <CardDescription>Ano letivo - 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[200px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie data={chartData} dataKey="amount" nameKey="departament" />
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Aumento de 2.2% esse ano <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground text-xs text-center">
              Exibindo total de diretores por departamento ultimo ano
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export const description = 'A pie chart with a custom label'
const chartData = [
  { departament: 'ADM', amount: 275, fill: 'var(--color-chrome)' },
  { departament: 'RH', amount: 200, fill: 'var(--color-safari)' },
  { departament: 'Financeiro', amount: 187, fill: 'var(--color-firefox)' },
  { departament: 'Marketing', amount: 173, fill: 'var(--color-edge)' },
  { departament: 'Vendas', amount: 90, fill: 'var(--color-other)' }
]
const chartConfig = {
  departament: {
    label: 'departament'
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))'
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))'
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))'
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))'
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig
