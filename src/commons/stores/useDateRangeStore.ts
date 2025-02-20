import { create } from "zustand";
import { IDateRangeState } from "../../types/stores.type";

export const useDateRangeStore = create<IDateRangeState>((set) => ({
  dateRange: [null, null],
  setDateRange: (range) => set({ dateRange: range }),
}));
