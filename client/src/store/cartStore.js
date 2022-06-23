import { defineStore } from "pinia";

export const useCart = defineStore("cart_items", {
  state: () => {
    return {
      items: [],
    };
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
  },
});
