import { create } from "zustand";
import { SearchBarState } from "../../types/stores.type";

export const useSearchBarStore = create<SearchBarState>((set) => ({
  searchBar: "",
  setSearchBar: (keyWord) => set({ searchBar: keyWord }),
}));
