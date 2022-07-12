<script setup lang="ts">
import { useCountriesStore } from '~~/composables/countries'

const countriesStore = useCountriesStore()

const countries = computed(() => countriesStore.getCountries)
const countries1 = $ref(countriesStore.getCountries)

console.log({ countries, countries1 })

onMounted(async () => {
  await countriesStore.fetchCountries()
  // countries.value = countriesStore.countries
})

console.log({ countries })
</script>

<template>
  <div grid="~ lg:cols-2 gap2" px8 h-full of-hidden>
    <div h-full grid="~ rows-[min-content_min-content_1fr]" of-hidden>
      <Search />
    </div>
    <div>
      <li v-for="(country, index) in countries" :key="index">
        {{ country.name as string }}
      </li>
    </div>
  </div>
</template>
