import { defineStore } from "pinia";

export const useCart = defineStore("cart_items", {
  state: () => {
    return {
      items: [],
    };
  },
  getters: {
    getItems : (state) => {
      return JSON.parse(JSON.stringify(state.items))
    },
    nbr_items : (state) => {
      return state.items.length
    }
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
    increase_number(position) {
      this.items[position].number++
      console.log(this.items)
    },
    decrease_number(position) {
      if (this.items[position].number >= 2) {
        this.items[position].number--
      }
    },
    total_amount() {
      let total = 0
      for (let i = 0; i < this.getItems.length; i++) {
        total = total + this.getItems[i].item.price*this.getItems[i].number
      } 
      return total
    }
  },
});
