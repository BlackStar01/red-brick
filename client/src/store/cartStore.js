import { defineStore } from "pinia";

export const useCart = defineStore("cart_items", {
  state: () => {
    return {
      items: [],
    };
  },
  getters: {
    getItems(state) {
      return JSON.parse(JSON.stringify(state.items))
    },
  },
  actions: {
    add_item(new_item) {
      if (this.items.find((element) => element.item.id === new_item.item.id)) {
        alert("Item already added to the cart")
      }
      else {
        this.items.push(new_item);
      }
    },
    delete_item(position) {
      this.items.splice(position, 1)
    },
  },
});
