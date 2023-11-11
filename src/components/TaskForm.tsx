import { FC } from 'react'

import { useTaskFormStore } from '../store/taskForm'

export const TaskForm: FC = () => {
  const isOpen = useTaskFormStore((store) => store.isOpen)
  const setIsOpen = useTaskFormStore((store) => store.setIsOpen)

  return (
    // Backdrop
    <div
      onClick={() => setIsOpen(false)}
      className={`absolute top-0 h-full w-full flex justify-center items-center transition-colors ${
        isOpen ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      {/* Modal */}
      <div className='w-1/3 h-1/3 rounded bg-white shadow-md'>
        <h5>Hello</h5>
      </div>
    </div>
  )
}
