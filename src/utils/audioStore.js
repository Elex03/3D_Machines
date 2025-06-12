import { create } from "zustand";

export const useAudioStore = create((set) => ({
  isAudioOn: false,
  toggleAudio: () => set((state) => ({ isAudioOn: !state.isAudioOn })),
}));
