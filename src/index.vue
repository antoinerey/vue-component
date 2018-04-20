<template>
  <div>Poeut! {{ label }}</div>
</template>

<script>
import names from 'starwars-names'

export const pouet = 'Pouet'

export default {
  computed: {
    label() {
      return names.random()
    }
  }
}
</script>

<style scoped>
div {
  background: powderblue;
}
</style>

