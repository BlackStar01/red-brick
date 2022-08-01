import { defineStore } from "pinia";

export const useSort = defineStore("sorted_items", {
  state: () => {
    return {
      all_categories: [],
      selected_categories: [],
    };
  },
  getters: {
    getAllCategories(state) {
      return JSON.parse(JSON.stringify(state.all_categories))
    },
  },
  actions: {
    add_all_categories(tabCategory) {
      if (this.all_categories.length === 0) {
        this.all_categories = tabCategory
      }
    },
    add_or_remove_selected(category) {
      if (this.selected_categories.find((element) => element === category)) {
        this.selected_categories.splice(this.selected_categories.indexOf(category), 1)
      }
      else {
        this.selected_categories.push(category);
      }
    },
  },
});
