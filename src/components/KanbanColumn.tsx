import { FC } from 'react'

import { Columns } from '../enums'
import { useTaskStore } from '../store/task'
import { useTaskFormStore } from '../store/taskForm'
import { getStyleFromColumnType, getTitleFromColumnType } from '../utils/kanban'

type IKanbanColumn = {
  type: Columns
}

export const KanbanColumn: FC<IKanbanColumn> = ({ type }) => {
  // Filter column's tasks
  const tasks = useTaskStore((store) =>
    store.tasks.filter((task) => task.column === type)
  )

  const setIsOpen = useTaskFormStore((store) => store.setIsOpen)

  return (
    <section className='rounded w-52 px-2'>
      <div className='flex flex-row justify-between items-center mb-1'>
        <div className='flex items-center'>
          <h3
            className={`${getStyleFromColumnType(
              type
            )} text-sm px-1 rounded mr-2 text-gray-700`}
          >
            {getTitleFromColumnType(type)}
          </h3>
          <span className='text-gray-400 text-sm'>{tasks.length}</span>
        </div>
        <button
          onClick={() => setIsOpen(true, type)}
          className='text-xl rounded-xl text-gray-400 px-2 hover:bg-gray-100 hover:-translate-y-1 transition-transform'
        >
          +
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        {tasks.map((task) => {
          return (
            <div
              className='p-2 rounded shadow-sm border-gray-100 border-2 cursor-move hover:-translate-y-1 transition-transform'
              key={task.id}
              data-id={task.id}
            >
              <p className='text-sm text-gray-700 text-center'>
                {task.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
