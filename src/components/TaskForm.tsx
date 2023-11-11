import { FC, FormEvent, useState } from 'react'

import { useTaskFormStore } from '../store/taskForm'
import { useTaskStore } from '../store/task'

export const TaskForm: FC = () => {
  const addTask = useTaskStore((store) => store.addTask)
  const isOpen = useTaskFormStore((store) => store.isOpen)
  const column = useTaskFormStore((store) => store.column)
  const setIsOpen = useTaskFormStore((store) => store.setIsOpen)

  const [description, setDescription] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!column) return setIsOpen(false)

    addTask({
      id: crypto.randomUUID(),
      description,
      column,
    })

    setDescription('')
    setIsOpen(false)
  }

  return (
    // Backdrop
    <div
      onClick={() => setIsOpen(false)}
      className={`absolute top-0 h-full w-full flex justify-center items-center transition-colors ${
        isOpen ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-1/3 h-1/3 rounded bg-white shadow-md select-none flex justify-center items-center flex-col'
      >
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='flex flex-col gap-8 justify-center'
        >
          <h3 className='font-bold text-xl'>New Task</h3>
          <div className='flex flex-col gap-2 w-full items-start justify-center'>
            <label
              className='text-gray-700 text-sm font-bold'
              htmlFor='description'
            >
              Description
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='description'
              title='description'
              type='text'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline'
            type='submit'
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
