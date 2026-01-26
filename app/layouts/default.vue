<template>
  <div class="min-h-screen bg-white text-gray-900 antialiased">
    <!-- Header -->
    <header class="border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold">
          Wilson Creative
        </NuxtLink>

        <nav class="space-x-6">
          <NuxtLink to="/about" class="hover:underline">
            About
          </NuxtLink>
          <NuxtLink to="/projects" class="hover:underline">
            Projects
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 mt-24">
      <div class="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-500">
        © {{ new Date().getFullYear() }} Wilson Creative
      </div>
    </footer>
  </div>
</template>
