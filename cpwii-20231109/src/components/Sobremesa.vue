<template>
  <div v-for="sobremesa in sobremesas">
    <h1>{{ sobremesa.name }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        sobremesas: []
      }
    },
    mounted() {
      axios
        .get('https://bug-free-disco-vrw65644pvv2wjgj-5173.app.github.dev/sobremesa.json')
        .then(response => (this.sobremesas = response.data))
    },
  }
</script>

<style>

</style>