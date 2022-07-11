<script setup lang="ts">
import { input, isSearching, searchResult, selectIndex } from '~/composables/state'

const route = useRoute()
const router = useRouter()
const inputEl = $ref<HTMLInputElement>()
const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
}

watch(
  () => route.query.s,
  async () => {
    input.value = String(route.query.s || '')
    await excuteSearch()
  },
)

async function excuteSearch() {
  if (input.value)
    isSearching.value = true
  try {
    searchResult.value = await searcher.search(input.value)
  }
  catch (e) {
    console.error(e)
  }
  isSearching.value = false
  selectIndex.value = 0
  isModalOpen.value = false
  await router.replace({
    path: '/',
    query: input.value
      ? {
          s: input.value,
        }
      : undefined,
  })
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

