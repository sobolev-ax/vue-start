<template>
  <div>
    <h1>{{ msg }}</h1>
    <app-car></app-car>
  </div>
</template>

<script>
import Car from './Car'
export default {
  components: {
    appCar: Car,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
