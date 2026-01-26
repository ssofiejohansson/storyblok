<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// If homepage, load "home", otherwise load slug
const slug = route.path === '/' ? 'home' : route.path.replace('/', '')

const { story } = await useAsyncStoryblok(slug, {
  api: {
    version: 'draft',
  },
})
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>
