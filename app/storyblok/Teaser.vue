<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section class="p-24 bg-gray-900 text-white">
    <h1 class="text-5xl font-bold">
      {{ blok.headline }}
    </h1>
  </section>
</template>

<style scoped>


</style>