import { create } from "zustand";
import { LoadState } from "../../types/stores.type";

export const useLoadStore = create<LoadState>((set) => ({
  isLoaded: false,
  setIsLoaded: () => set(() => ({ isLoaded: true })),
}));
