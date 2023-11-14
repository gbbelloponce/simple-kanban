import { FC, DragEvent, useState } from 'react'

import { Task } from './Task'
import { Columns } from '../enums'
import { useTaskStore } from '../store/task'

export const TaskList: FC<{ column: Columns; tasks: SK.Task[] }> = ({
  column,
  tasks,
}) => {
  const [isDragOver, setIsDragOver] = useState(false)

  const moveTask = useTaskStore((state) => state.moveTask)

  const onDragOver = (e: DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const onDragLeave = () => {
    setIsDragOver(false)
  }

  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    // Does not move if the column its the same
    if (e.dataTransfer.getData('taskColumn') === column.toString()) return

    moveTask(e.dataTransfer.getData('taskId'), column)
  }

  return (
    <div
      className='flex-1 flex flex-col gap-3 transition-all'
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      {isDragOver && (
        <div className='h-10 p-2 rounded shadow-sm border-dashed border-green-300 border-2'></div>
      )}
    </div>
  )
}
