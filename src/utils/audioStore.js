import {create} from 'zustand';

const useAudioStore = create((set) => ({
    isAudioOn : false,
    toggleAudio: () => set((state) => ({isAudioOn: !state.isAudioOn})),
}));


export default useAudioStore;