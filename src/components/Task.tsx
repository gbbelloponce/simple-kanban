import { FC, DragEvent } from 'react'

export const Task: FC<{ task: SK.Task }> = ({ task }) => {
  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.setData('taskId', task.id)
    e.dataTransfer.setData('taskColumn', task.column.toString())
  }

  return (
    <div
      className='p-2 rounded shadow-sm bg-white border-gray-100 border-2 cursor-move hover:scale-105 transition-all'
      draggable={true}
      onDragStart={onDragStart}
      data-id={task.id}
    >
      <p className='text-sm text-gray-700 text-center'>{task.description}</p>
    </div>
  )
}
