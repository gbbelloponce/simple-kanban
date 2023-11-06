import { FC } from 'react'

import { Columns } from '../enums'
import { KanbanColumn } from './KanbanColumn'

export const Kanban: FC = () => {
  return (
    <article className='flex justify-center items-start gap-5'>
      <KanbanColumn type={Columns.TODO} />
      <KanbanColumn type={Columns.DOING} />
      <KanbanColumn type={Columns.DONE} />
    </article>
  )
}
