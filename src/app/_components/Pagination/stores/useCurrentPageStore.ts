import { create } from "zustand";

interface ICurrentPageStore {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const useCurrentPageStore = create<ICurrentPageStore>((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set({ currentPage: page }),
}));
