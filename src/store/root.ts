import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: (): RootStore => ({
    size: "Стандартный",
    count: 6,
    listSizeMenu: ["Стандартный", "Увеличиный"],
    listCountMenu: [6, 8, 12],
  }),
});

type RootStore = {
  size: string;
  count: number;
  listSizeMenu: string[];
  listCountMenu: number[];
};
