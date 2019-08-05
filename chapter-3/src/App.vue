<template>
  <div>
    <h1>{{ msg }}</h1>
    <app-car
      :carName="carName"
      :carYear="carYear">
    </app-car>
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
      carName: 'Ford from parent',
      carYear: 2019,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
