import { create } from "zustand";
import { ImageStoreState } from "../../types/stores.type";

export const useImageStore = create<ImageStoreState>((set) => ({
  imageMap: {},
  setImage: (id, url) =>
    set((state) => ({ imageMap: { ...state.imageMap, [id]: url } })),
}));
