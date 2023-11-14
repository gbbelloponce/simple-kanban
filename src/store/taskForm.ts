import { create } from 'zustand'

export const useTaskFormStore = create<SK.TaskFormStore>((set) => ({
  isOpen: false,
  column: undefined,
  setIsOpen: (value, column) => set(() => ({ isOpen: value, column })),
}))
