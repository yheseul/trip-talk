import { create } from "zustand";
import { AccessTokenState } from "../../types/stores.type";

export const useAccessTokenStore = create<AccessTokenState>((set) => ({
  accessToken: "",
  setAccessToken: (newAccessToken) => set(() => ({ accessToken: newAccessToken })),
}));
