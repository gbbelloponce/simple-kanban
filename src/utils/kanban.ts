import { Columns } from '../enums'

const ColumnToTitle: Record<Columns, string> = {
  1: 'To do',
  2: 'Doing',
  3: 'Done',
}

const ColumnToStyle: Record<Columns, string> = {
  1: 'bg-red-300',
  2: 'bg-yellow-300',
  3: 'bg-green-300',
}

export const getTitleFromColumnType = (type: Columns) => ColumnToTitle[type]

export const getStyleFromColumnType = (type: Columns) => ColumnToStyle[type]
