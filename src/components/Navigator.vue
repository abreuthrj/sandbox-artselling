<script>
import { useCartStore } from '../stores/cart'

export default {
  setup() {
    const cartStore = useCartStore()

    return {cartStore}
  },
}
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <span class="divider"></span>
        <RouterLink to="/shop">Shop</RouterLink>
        <span class="divider"></span>
        <RouterLink to="/cart">Cart <span class="cart-amount">{{cartStore.size}}</span></RouterLink>
      </nav>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  padding: 1em;

  margin-bottom: 2em;
}

nav a {
  position: relative;

  padding: .5em 4em;
  margin: 0em 1em;
  font-size: 1.05em;
  text-decoration: none;
  letter-spacing: .05em;

  transition: .15s;
  border-bottom: 2px solid transparent;
}

nav a:hover {
  border-bottom: 2px solid rgb(150, 150, 150);
}

nav a:active {
  color: inherit;
}

span.divider {
  content: "";
  border-right: 2px solid rgb(150, 150, 150);
}

.cart-amount {
  position: absolute;
  right: 0;

  background-color: rgb(245, 245, 245);
  padding: .2em .4em;
  border-radius: .2em;
  font-size: .7em;
  font-weight: bold;

  margin-top: .1em;
}
</style>