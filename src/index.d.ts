import { Columns } from './enums'

// Global access types
declare global {
  // SK => Simple Kanban
  namespace SK {
    type TaskStore = {
      tasks: Task[]
      addTask: (task: Task) => void
    }
    type TaskFormStore = {
      isOpen: boolean
      column?: Columns
      setIsOpen: (value: boolean, column?: Columns) => void
    }
    type Task = {
      id: string
      column: Columns
      description: string
    }
  }
}

export {}
