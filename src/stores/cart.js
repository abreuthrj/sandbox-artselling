import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [],
  }),
  getters: {
    size(state) {
      return state.items.reduce((prev, cur) => prev + cur.amount, 0);
    },
  },
  actions: {
    add(item) {
      let i = this.items.findIndex((needle) => needle.image == item.image);

      if (i == -1)
        this.items.push({
          ...item,
          amount: 1,
        });
      else this.items[i].amount++;
    },

    rem(image) {
      let i = this.items.findIndex((needle) => needle.image == image);

      if (i !== -1) {
        this.items[i].amount--;

        if (this.items[i].amount == 0) this.items.splice(i, 1);
      }
    },
  },
});
