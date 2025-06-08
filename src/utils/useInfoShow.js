import {create} from 'zustand'

export const useInfoStore = create((set) => ({
    currentLabel: 'No hay información disponible', 
    setLabel: (label) => set({ currentLabel: label }),
  }))