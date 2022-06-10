<script>
import { useCartStore } from "../stores/cart";
import CartItem from "../components/CartItem.vue";

export default {
  setup() {
    const cartStore = useCartStore()

    return {
      cartStore
    }
  },
  components: { CartItem }
}
</script>

<template>
  <h1>Your Cart</h1>

  <CartItem 
    class="item"
    v-for="item, i in cartStore.items"
    :key="i"
    :image="item.image"
    :name="item.name"
    :amount="item.amount"
    :description="item.description"
    @clickDelete="this.cartStore.rem(item.image)"
  />
</template>

<style scoped>
h1 {
  text-align: center;
}
.item {
  margin: 2em 0em;
  box-shadow: 0em 0em .5em .1em rgb(200, 200, 200);
}
</style>