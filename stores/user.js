import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  id: "useUserStore",
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),
  actions: {},
});
