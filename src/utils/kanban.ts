import { Columns } from '../enums'

const ColumnToTitle: Record<Columns, string> = {
  1: 'To do',
  2: 'Doing',
  3: 'Done',
}

export const getTitleFromColumnType = (type: Columns) => ColumnToTitle[type]
