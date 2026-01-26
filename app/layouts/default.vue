<script setup>
const { story: header } = await useAsyncStoryblok('header', {
  api: { version: 'draft' }
})
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 antialiased">
  <Header />

    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
