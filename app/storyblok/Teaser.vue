<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="teaser">
    <h2 class="font-bold text-4xl mb-4">{{ blok.headline }}</h2>
  </div>
</template>

<style scoped>
.teaser {
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>