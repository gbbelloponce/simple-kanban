import { create } from 'zustand'

export const useTaskStore = create<SK.TaskState>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}))
