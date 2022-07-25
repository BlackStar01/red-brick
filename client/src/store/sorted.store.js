import { defineStore } from "pinia";

export const useSort = defineStore("sorted_items", {
  state: () => {
    return {
      categories: [],
    };
  },
  /* getters: {
    getItems(state) {
      return JSON.parse(JSON.stringify(state.items))
    },
  }, */
  actions: {
    add_or_remove(category) {
      if (this.categories.find((element) => element === category)) {
        this.categories.splice(this.categories.indexOf(category), 1)
      }
      else {
        this.categories.push(category);
      }
      console.log(JSON.parse(JSON.stringify(this.categories)))
    },
  },
});
