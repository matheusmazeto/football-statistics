<script setup>
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <main class="pt2 text-center font-sans" w-full h-screen of-hidden relative>
    <NuxtPage />
  </main>
</template>

<style>
html, body , #__nuxt {
  height: 100vh;
}
html.dark {
  background: #121212;
  color: white;
}
html.dark .shiki-light {
  display: none;
}
html:not(.dark) .shiki-dark {
  display: none;
}
</style>
