import { create } from 'zustand'

export const useTaskStore = create<SK.TaskStore>((set) => ({
  tasks: [
    {
      description: 'A task',
      id: '1',
      column: 1,
    },
    {
      description: 'A asdtask',
      id: '5',
      column: 1,
    },
    {
      description: 'Another task',
      id: '2',
      column: 2,
    },
    {
      description: 'Other task',
      id: '3',
      column: 3,
    },
  ],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}))
