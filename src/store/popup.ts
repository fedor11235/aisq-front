import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup", {
  state: (): PopupStore => ({
    isPopupConfigOpen: false,
  }),
});

type PopupStore = {
  isPopupConfigOpen: boolean;
};
