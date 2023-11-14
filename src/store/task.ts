import { create } from 'zustand'

export const useTaskStore = create<SK.TaskStore>((set) => ({
  tasks: [
    {
      description: 'A task',
      id: '1',
      column: 1,
    },
    {
      description: 'A special Task',
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
  moveTask: (taskId, toColumn) =>
    set((state) => ({
      tasks: [
        // All tasks excepto the one to move
        ...state.tasks.filter((task) => taskId !== task.id),
        {
          // Spread all props from task found by id
          ...state.tasks.find((task) => task.id === taskId)!,
          column: toColumn,
        },
      ],
    })),
}))
