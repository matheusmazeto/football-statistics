<script setup lang="ts">
const input = ref('')
const inputEl = $ref<HTMLInputElement>()
const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
}
</script>

<template>
  <div relative border="~ rounded base" shadow font-200 text-2xl>
    <div v-if="false" p="x6 y4" gap2 row items-center animate-pulse>
      <div i-carbon-circle-dash w-7 h-7 animate-spin />
      <div op50>
        loading config...
      </div>
    </div>
    <input
      v-else
      ref="inputEl"
      v-model="input"
      v-focus
      aria-label="Type to explore"
      placeholder="Type to explore..."
      type="text"
      autocomplete="off" w="full"
      p="x6 y4"
      bg-transparent border-none
      class="!outline-none"
    >
    <button
      v-if="input"
      absolute flex right-2 w-10 top-2 bottom-2 text-xl op30 hover:op90
      aria-label="Clear search"
      @click="() => ({})"
    >
      <span i-carbon-close ma block aria-hidden="true" />
    </button>
  </div>
</template>

