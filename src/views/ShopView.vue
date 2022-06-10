<script>
import ArtCard from '../components/ArtCard.vue'
import { useCartStore } from '../stores/cart';

export default {
  setup() {
    const cartStore = useCartStore()

    return {cartStore}
  },
  data() {
      return {
          items: [
              { name: "Awesome Picture", description: "This picture is soo awesome that you won't be able to leave this website without buying it", price: 1267,  image: "https://images.pexels.com/photos/6343855/pexels-photo-6343855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Magnific Picture", description: "This picture is soo magnific that you won't be able to leave this website without buying it", price: 4234,  image: "https://images.pexels.com/photos/1606591/pexels-photo-1606591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Fantastic Picture", description: "This picture is soo fantastic that you won't be able to leave this website without buying it", price: 3245,  image: "https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Incredible Picture", description: "This picture is soo incredible that you won't be able to leave this website without buying it", price: 2378,  image: "https://images.pexels.com/photos/3045825/pexels-photo-3045825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Unbelievable Picture", description: "This picture is soo unbelievable that you won't be able to leave this website without buying it", price: 2347,  image: "https://images.pexels.com/photos/4587855/pexels-photo-4587855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { name: "Already yours Picture", description: "This picture is soo already yours that you won't be able to leave this website without buying it", price: 3946,  image: "https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
          ]
      };
  },
  methods: {
    buyArt(item) {
      this.cartStore.add(item)
      this.$router.push('cart')
    }
  },
  components: { ArtCard }
}
</script>

<template>
  <div class="list">
    <ArtCard 
      v-for="item, i in items"
      :key="i"
      :name="item.name"
      :description="item.description"
      :image="item.image"
      :price="item.price"
      @clickBuy="buyArt(item)"
    />
  </div>
</template>

<style>

</style>

<style scoped>
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    flex-wrap: wrap;
  }
</style>