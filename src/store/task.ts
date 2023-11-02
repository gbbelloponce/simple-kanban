import { create } from 'zustand'

export const useTaskStore = create<SK.TaskStore>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}))
