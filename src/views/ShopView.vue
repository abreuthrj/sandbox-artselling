<script>
export default {
  data() {
    return {
      items: [
        {name: "Quadro foda", description: "Esse quadro foi pintado durante a guerra do vietna por soldados refugiados"},
        {name: "Quadro magnifico", description: "Esse quadro foi pintado durante a guerra do vietna por soldados refugiados"},
        {name: "Quadro fantastico", description: "Esse quadro foi pintado durante a guerra do vietna por soldados refugiados"},
        {name: "Quadro sensacional", description: "Esse quadro foi pintado durante a guerra do vietna por soldados refugiados"},
      ]
    }
  }
}
</script>

<template>
  <div class="list">
    <div class="item" v-for="item in items">
      <img loading="lazy" src="https://apliquefacil.vteximg.com.br/arquivos/ids/192654-587-587/QD11470-quadro-decorativo-Geek-Filete-preto.jpg?v=637556787125700000" />
      <h1>{{item.name}}</h1>
      <p>{{item.description}}</p>
      <button>Buy</button>
    </div>
  </div>
</template>

<style>
  body {
    background-color: rgb(240, 240, 240);
    font-family: sans-serif;
  }
</style>

<style scoped>
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    flex-wrap: wrap;
  }

  .item {
    width: 25%;
    min-width: 400px;
    /* height: 350px */
    margin: 2em;
    padding: 1em;
    box-sizing: border-box;
    background-color: white;
  }

  .item h1 {
    color: rgb(60, 60, 60);
  }

  .item img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
  }

  .item button { 
    float: right;
    color: white;
    background-color: hsl(220, 100%, 50%);
    outline: none;
    border: 0;
    padding: .6em 1.5em;
    font-size: 1.1em;
    transition: .15s;
  }

  .item button:hover {
    background-color: hsl(220, 100%, 60%);
  }

  .item p {
    color: rgb(60, 60, 60);
  }
</style>