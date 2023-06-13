import { create } from "zustand";

interface storeState {
  totalCount: number;
  setTotalCount: (val: number) => void;
  maleCount: number;
  setMaleCount: (sign: string) => void;
  femaleCount: number;
  setFemaleCount: (sign: string) => void;
  childrenCount: number;
  setChildrenCount: (sign: string) => void;
}

export const useStore = create<storeState>((set) => ({
  totalCount: 0,
  setTotalCount: (val) => set({ totalCount: val }),
  maleCount: 0,
  setMaleCount: (sign) =>
    set((state) => ({
      maleCount: sign === "plus" ? state.maleCount + 1 : state.maleCount - 1,
    })),
  femaleCount: 0,
  setFemaleCount: (sign) =>
    set((state) => ({
      femaleCount:
        sign === "plus" ? state.femaleCount + 1 : state.femaleCount - 1,
    })),
  childrenCount: 0,
  setChildrenCount: (sign) =>
    set((state) => ({
      childrenCount:
        sign === "plus" ? state.childrenCount + 1 : state.childrenCount - 1,
    })),
}));
