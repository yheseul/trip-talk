import { create } from "zustand";

interface AccessTokenState {
  accessToken: string;
  setAccessToken: (newAccessToken: string) => void;
}

export const useAccessTokenStore = create<AccessTokenState>((set) => ({
  accessToken: "",
  setAccessToken: (newAccessToken) => set(() => ({ accessToken: newAccessToken })),
}));
