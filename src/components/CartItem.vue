<script>
import TrashCan from '../assets/icons/TrashCan.vue'

export default {
  props: ['name', 'image', 'amount', 'description'],
  components: {TrashCan}
}
</script>

<template>
  <div class="item">
    <img :src="image">
    <div class="info">
      <h1>{{ name }}</h1>
      <p class="amount">{{ amount }}x</p>
      <p>{{ description }} <i @click="this.$emit('clickDelete')"><TrashCan /></i></p>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 200px;
  height: 100px;
  object-fit: cover;
}

.item {
  width: 100%;
  background-color: white;

  display: flex;
  align-items: stretch;

  padding: .5em;
  box-sizing: border-box;
}

h1 {
  display: inline-block;
  margin: 0;
}
.info {
  width: 100%;
  margin-left: 1em;
  margin-right: 1em;
}

.info p.amount {
  float: right;
  width: calc(24px + 1em);
  text-align: center;
}

i {
  float: right;
  cursor: pointer;

  width: 24px;
  height: 24px;

  padding: .5em;
  border-radius: 50%;
  transition: .15s;
}

i::v-deep svg{
  width: 24px;
  height: 24px;
}

i:hover {
  background-color: rgb(245, 245, 245);
}

i:active {
  background-color: rgb(240, 240, 240);
}
</style>