<script>
export default {
  props: ['name', 'description', 'price', 'image']
}
</script>

<template>
  <div class="item">
    <img loading="lazy" :src="image" />
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <div class="foot">
      <p>$ {{ price.toFixed(2) }}</p>
      <button @click="this.$emit('clickBuy')">Buy</button>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 25%;
  min-width: 400px;
  /* height: 350px */
  margin: 2em;
  padding: 1em;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 0 .5em .3em rgb(200, 200, 200);
}

h1 {
  color: rgb(60, 60, 60);
}

img {
  width: 100%;
  max-height: 150px;
  object-fit: cover;
}

button {
  float: right;
  color: white;
  background-color: hsl(210, 100%, 50%);
  outline: none;
  border: 0;
  padding: .6em 1.5em;
  font-size: 1.1em;
  transition: .15s;
  cursor: pointer;
}

button:hover {
  background-color: hsl(210, 100%, 45%);
}

button:active {
  background-color: hsl(210, 100%, 40%);
}

.item p {
  color: rgb(60, 60, 60);
}

.foot p{
  display: inline-block;
  font-weight: bold;
}
</style>