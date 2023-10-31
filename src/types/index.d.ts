export type TaskState = {
  tasks: Task[]
  addTask: (task: Task) => void
}

export type Task = {
  id: string
  description: string
}
