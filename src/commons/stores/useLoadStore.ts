import { create } from "zustand";

interface LoadState {
  isLoaded: boolean;
  setIsLoaded: () => void;
}

export const useLoadStore = create<LoadState>((set) => ({
  isLoaded: false,
  setIsLoaded: () => set(() => ({ isLoaded: true })),
}));
