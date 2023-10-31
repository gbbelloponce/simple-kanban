// Global access types
declare global {
  // SK => Simple Kanban
  namespace SK {
    type TaskState = {
      tasks: Task[]
      addTask: (task: Task) => void
    }
    type Task = {
      id: string
      description: string
    }
  }
}

export {}
