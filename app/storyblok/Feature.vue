<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="feature text-red-500 p-6 m-2">
    <span>{{ blok.name }}</span>
  </div>
</template>