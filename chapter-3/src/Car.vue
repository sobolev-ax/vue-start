<template>
  <div>
    <h3>Name: {{ carName }}</h3>
    <p>Year: {{ carYear }}</p>
  </div>
</template>

<script>
export default {
  props: {
    carName: {
      type: String,
      default: 'Default Name'
    },
    carYear: Number
  },
}
</script>

