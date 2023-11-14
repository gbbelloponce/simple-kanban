import { FC } from 'react'

import { Columns } from '../enums'
import { TaskForm } from './TaskForm'
import { KanbanColumn } from './KanbanColumn'

export const Kanban: FC = () => {
  return (
    <>
      <article className='flex justify-center items-stretch gap-5'>
        <KanbanColumn type={Columns.TODO} />
        <KanbanColumn type={Columns.DOING} />
        <KanbanColumn type={Columns.DONE} />
      </article>
      <TaskForm />
    </>
  )
}
