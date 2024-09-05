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

import * as React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

export default function Director() {
  const [date, setDate] = React.useState<Date>()

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
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="bg-green-500 hover:bg-green-600 text-zinc-100 font-bold hover:text-zinc-100 shadow-md border-none"
              variant="outline"
            >
              Cadastrar Novo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className='text-contrast text-2xl font-bold'>Cadastro de diretores</DialogTitle>
              <DialogDescription>
                Nesse formulário você pode cadastrar um novo diretor na
                plataforma.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  value="Nome do diretor"
                  className="col-span-3"
                />

                <Label htmlFor="department">Departamento</Label>
                {/* Opções de cargos cadastradas para diretores */}
                <Select>
                  <SelectTrigger className="w-full col-span-2">
                    <SelectValue placeholder="Selecione o departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Departamentos cadastrados</SelectLabel>
                      {/* <SelectItem value="apple">Apple</SelectItem> */}
                      {dataTable.map(data => {
                        return (
                          <SelectItem key={data.id} value={data.department}>
                            {data.department}
                          </SelectItem>
                        )
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                
                <br />
                <Label htmlFor="hireDate">Data de contratação</Label>
                <div className='col-span-2'>
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
                        {date ? format(date, 'PPP') : <span>Escolha a data</span>}
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
              <Button className='w-full mt-5' type="submit">Salvar cadastro</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Table className="bg-transparent backdrop-blur-[200px] border border-green-400">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Departamento</TableHead>
            <TableHead className="text-right">Data de Contratação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataTable.map(data => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.id}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.department}</TableCell>
              <TableCell className="text-right">{data.hireDate}</TableCell>
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
    </div>
  )
}

const dataTable = [
  {
    id: 'DIR001',
    name: 'João Silva',
    department: 'Administração',
    hireDate: '01/02/2015'
  },
  {
    id: 'DIR002',
    name: 'Maria Oliveira',
    department: 'Recursos Humanos',
    hireDate: '15/03/2016'
  },
  {
    id: 'DIR003',
    name: 'Carlos Souza',
    department: 'Financeiro',
    hireDate: '20/05/2017'
  },
  {
    id: 'DIR004',
    name: 'Ana Santos',
    department: 'Marketing',
    hireDate: '10/08/2018'
  },
  {
    id: 'DIR005',
    name: 'José Pereira',
    department: 'Vendas',
    hireDate: '05/10/2019'
  }
]
