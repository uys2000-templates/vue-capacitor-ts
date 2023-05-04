import { defineStore } from "pinia";

import { Something } from "@/types/something";

export const useSomethingStore = defineStore("something", {
  state: () => {
    return {
      something: "example" as Something,
    };
  },
  actions: {
    setSomething(value: Something) {
      this.something = value;
    },
  },
  getters: {
    getTheme: (state) => {
      return state.something;
    },
  },
});
