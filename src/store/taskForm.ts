import { create } from 'zustand'

export const useTaskFormStore = create<SK.TaskFormStore>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set(() => ({ isOpen: value })),
}))
